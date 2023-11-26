
export const Validate = (fields) => {

    let message = '';

    for(let field of fields) {

        if(field.text.trim() === "") {
            message = 'Fields cannot be empty!';
            return message;
        }

        else if(field.type === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.text)) {
                message = 'Invalid email address';
                return message;
            }
        }

        else if(field.type === "password" || field.type === "newPassword" || field.type === "retypedPassword") {
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
            if (!passwordRegex.test(field.text)) {
                message = 'Password must contain at least one letter, one number, and be at least 6 characters long';
                return message;
            }
        }

        else if(field.type === "address") {
            const addressRegex = /^[^\d]+ \d+$/;
            if (!addressRegex.test(field.text)) {
                message = 'Address must contain a street name, a space, and a number (e.g., "Sumatovacka 30")';
                return message;
            }          
        }
    }

    message = "OK";
    return message;
}