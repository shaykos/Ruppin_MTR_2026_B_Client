export function rememberCards() {
    debugger;
    let allImages = document.querySelectorAll("img");
    let flippedCards = [];
    let chosenCards = 0;
    let countMatches = 0;
    let countAttempts = 0;
    
    //saving the original form of the cards
    allImages.forEach(img => {

        img.dataset.originalSrc = img.src;

        img.addEventListener("click", () => {
            //starting the game
            img.src = img.dataset.originalSrc;
            chosenCards++;

            //pushing evry two flipped cards to array
            flippedCards.push(img);

            if (chosenCards === 2) {
                countAttempts++;
                //if both cards are not eaual then flip back
                if (flippedCards[0].dataset.originalSrc != flippedCards[1].dataset.originalSrc) {
                    setTimeout((cards) => {
                        cards.forEach(img => {
                            img.src = "cardImages/backOfCard.jpeg";
                        });
                    }, 500, flippedCards);
                }
                else countMatches++;
                chosenCards = 0;
                flippedCards = [];

                //if there are 6 matches then start over
                if (countMatches === 6) {
                    setTimeout(() => {
                        allImages.forEach(img => {
                            img.src = "cardImages/backOfCard.jpeg";
                        });
                    }, 1000);
                    
                    setTimeout(() => {
                        alert (`Nice done! You finished with ${countAttempts} attempts!`);
                    }, 500);
                }
            }
        })
    })

    //turn cards to back
    setTimeout(() => {
        allImages.forEach(img => {
            img.src = "cardImages/backOfCard.jpeg";
        });
    }, 2000);
}
//לשמור כל קלף במשתנה שייצג את תמונת המקור
//ליצור מונה שברגע שנלחצו שני קלפים,יבדוקאם תואמים אחרת יחזרו לגב
//אם תואמים, ימשיכו להיות מוצגים