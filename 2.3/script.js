function validateEmail(email, domains) {
    // Regular expression to match a valid email address
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Check if the email address matches the regular expression
    if (!regex.test(email)) {
        return false;
    }

    // Check if the email address is in the specified domains
    for (const domain of domains) {
        if (email.endsWith(domain)) {
            return true;
        }
    }

    return false;
}

const email = "johndoe@gmail.com";
const domains = ["gmail.com", "yahoo.com"];

if (validateEmail(email, domains)) {
    console.log("The email address is valid.");
} else {
    console.log("The email address is invalid.");
}
