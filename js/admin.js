const memoryList =
    document.getElementById("memoryList");

const STORAGE_KEY =
    "birthdayMemories";


function getSavedMemories() {

    const saved =
        localStorage.getItem(
            STORAGE_KEY
        );

    if (saved) {
        return JSON.parse(saved);
    }

    return birthdayContent.memories.years;
}


function saveMemories(years) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(years)
    );
}


function loadMemories() {

    memoryList.innerHTML = "";

    const years =
        getSavedMemories();

    const yearData =
        years.find(
            function (year) {
                return year.year === "2026";
            }
        );


    yearData.items.forEach(
        function (memory, index) {

            const card =
                document.createElement("div");

            card.classList.add(
                "memory-card"
            );


            const number =
                document.createElement("p");

            number.classList.add(
                "memory-number"
            );

            number.textContent =
                "MEMORY " + (index + 1);


            const preview =
                document.createElement("div");

            preview.classList.add(
                "memory-preview"
            );


            if (memory.type === "image") {

                const img =
                    document.createElement("img");

                img.src =
                    "../" + memory.image;

                preview.appendChild(img);

            } else {

                const video =
                    document.createElement("video");

                video.src =
                    "../" + memory.video;

                video.muted = true;

                video.controls = true;

                preview.appendChild(video);
            }


            const captionField =
                createField(
                    "CAPTION",
                    memory.caption
                );


            const dateField =
                createField(
                    "DATE",
                    memory.date
                );


            const sizeField =
                document.createElement("div");

            sizeField.classList.add(
                "memory-field"
            );


            sizeField.innerHTML = `
                <label>SIZE</label>

                <select>
                    <option value="normal">
                        Normal
                    </option>

                    <option value="large">
                        Large
                    </option>

                    <option value="wide">
                        Wide
                    </option>
                </select>
            `;


            sizeField
                .querySelector("select")
                .value = memory.size;


            const saveButton =
                document.createElement("button");

            saveButton.classList.add(
                "save-btn"
            );

            saveButton.textContent =
                "SAVE";


            saveButton.addEventListener(
                "click",
                function () {

                    memory.caption =
                        captionField.value;

                    memory.date =
                        dateField.value;

                    memory.size =
                        sizeField
                            .querySelector("select")
                            .value;


                    saveMemories(years);


                    saveButton.textContent =
                        "SAVED ✓";


                    setTimeout(
                        function () {

                            saveButton.textContent =
                                "SAVE";

                        },
                        1500
                    );

                }
            );


            card.appendChild(number);

            card.appendChild(preview);

            card.appendChild(
                captionField
            );

            card.appendChild(
                dateField
            );

            card.appendChild(
                sizeField
            );

            card.appendChild(
                saveButton
            );


            memoryList.appendChild(card);

        }
    );
}


function createField(
    labelText,
    value
) {

    const field =
        document.createElement("div");

    field.classList.add(
        "memory-field"
    );


    const label =
        document.createElement("label");

    label.textContent =
        labelText;


    const input =
        document.createElement("input");

    input.type = "text";

    input.value =
        value || "";


    field.appendChild(label);

    field.appendChild(input);


    return input;
}


loadMemories();