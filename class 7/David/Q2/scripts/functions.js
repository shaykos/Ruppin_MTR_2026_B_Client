export function CheckResult() {
    debugger;
    let resArr = [(55 * 3), (85 / 5), (17 * 3), (222 / 2), (9 * 8)];
    

    const buttons = document.querySelectorAll('.checkORrestart');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            const clickedButtonId = event.target.id;

            if (clickedButtonId === 'btn_checkRes') {
                event.preventDefault();

                let allResults = document.querySelectorAll(".result");
                allResults.forEach((res, index) => {
                    if (Number(res.value) == resArr[index]) {
                        res.style.backgroundColor = "green";
                    }
                    else res.style.backgroundColor = "rgb(224, 35, 35)";
                })
            }
            else{
                event.preventDefault();
                
                let allResults = document.querySelectorAll(".result");
                allResults.forEach((res) => {
                    res.style.backgroundColor = "";
                    res.value = "";
                })
            }
        }
    )})

}