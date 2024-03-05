document.addEventListener(`DOMContentLoaded`, function() {
    const passwordBox = document.getElementById('passwordBox');
    const passwordSenha = document.getElementById('passwordSenha');

    function generatePassword(length, allowLowCharacters, allowHighCharacters, allowNumbers, allowSpecialCharacters) {

        const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
        const higherCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const specialCharacters = "?!@#$%&*";

        let allowCharacters = "";
        let password = "";

        allowCharacters += allowLowCharacters ? lowerCaseLetters : "";
        allowCharacters += allowHighCharacters ? higherCaseLetters : "";
        allowCharacters += allowNumbers ? numbers : "";
        allowCharacters += allowSpecialCharacters ? specialCharacters : "";

        console.log(allowCharacters);

        if(length <= 0) {
            return `(Password Must be at least one)`;
        }

        if(allowCharacters.length === 0) {
            return`(At least one needs to be selected)`;
        }

        for(let i  = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allowCharacters.length);
            password += allowCharacters[randomIndex];
        }

        return password;

    }


    const passwordLenght = 10;
    const allowLowCharacters = false;
    const allowHighCharacters = false;
    const allowNumbers = true;
    const allowSpecialCharacters = true;

    passwordSenha.onclick = function() {
        updatePassword();
    }

    function updatePassword() {
        const newPassword = generatePassword(passwordLenght, allowLowCharacters, allowHighCharacters, allowNumbers, allowSpecialCharacters);

        if (newPassword.startsWith('(')) {
            passwordBox.placeholder = newPassword;
            passwordBox.value = '';
        } else {
            passwordBox.value = newPassword;
            passwordBox.placeholder = 'Sua senha será exibida aqui';
        }
    }

})