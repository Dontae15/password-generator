const generatePassword = (
    length: number, 
    selectedCriteria: string[]
): string => {
    const characterPools: Record<string, string> = {
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        numbers: "0123456789",
        symbols: "!@#$%^&*()_+[]{}<>?,.",
      }; 

       // Build a pool of characters based on selected criteria
    let characterPool = "";
    selectedCriteria.forEach((criteria) => {
      characterPool += characterPools[criteria];
    });

    // Ensure at least one character from each selected criteria
    const guaranteedCharacters = selectedCriteria.map(
      (criteria) =>
        characterPools[criteria][
          Math.floor(Math.random() * characterPools[criteria].length)
        ]
    );

    // Generate the remaining characters
    let remainingCharacters = "";
    for (let i = 0; i < length - guaranteedCharacters.length; i++) {
      remainingCharacters +=
        characterPool[Math.floor(Math.random() * characterPool.length)];
    }

    // Combine and shuffle the password
    const passwordArray = [...guaranteedCharacters, ...remainingCharacters];
    return passwordArray.sort(() => Math.random() - 0.5).join("");
};


  
export default generatePassword