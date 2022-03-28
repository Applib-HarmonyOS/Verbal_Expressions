import VerEx from "verbal-expressions-hmos"
import prompt from '@system.prompt'
import fetch from '@system.fetch';
let regex;

export default {
    data: {
        title: "",
        jsx: "",
        p: "aAa_2AA",
        next: false,
        data: [],
        disappear: "",
        validated: false,
        manipulated: false,
        sanitized: false,
        inserted: false,
        movies: [],
        username: 'Palash',
    },
    changeChecked(res) {
        this.next = res.checked
    },
    fetchMockData() {
        let that = this
        fetch.fetch({
            url: 'http://localhost:3000/movies/',
            method: "GET",
            responseType: "JSON",
            success: function(response) {
                console.info("Request Successful");
                that.data = JSON.parse(response.data);
                for(let movie of that.data) {
                    console.log(movie["title"])
                }
            },
            fail: function() {
                console.info("Fetch Fail");
            },
            complete: function() {
                console.log("Call Complete")
            }
        });
    },
    onInit() {
        console.log("Initialized...")
    },
    validatePassword() {
        /*
            Password Validation

            Rules for password:
            1. It must have between 6 and 10 alphanumeric or underscore characters.
            2. It must include at least two lowercase letter.
            3. It must include at least three uppercase letters.
            4. It must include at least one digit.
         */

        regex = VerEx()
            .positiveLookAhead(VerEx().multiple(VerEx().anyOf('a-zA-Z0-9_'), 6, 10))
            .positiveLookAhead(VerEx().multiple(VerEx().anythingBut('a-z').oneOrMore().anyOf('a-z'), 2))
            .positiveLookAhead(VerEx().multiple(VerEx().anythingBut('A-Z').oneOrMore().anyOf('A-Z'), 3))
            .positiveLookAhead(VerEx().multiple(VerEx().anythingBut('0-9').oneOrMore().anyOf('0-9'), 1))

        console.log(regex.toRegExp())
        if(this.next) {
            prompt.showToast({
                message: 'Moving on...',
                duration: 3000,
            })
            this.disappear = "fadeOut"
            this.fetchMockData()
            setTimeout(() => {
                this.validated = true
                this.manipulated = true
                this.disappear = "fadeIn"
            }, 2000)
        }
        else {
            prompt.showToast({
                message: regex.toRegExp().test(this.p) ? 'Correct' : 'Incorrect',
                duration: 5000,
            })
        }
    },
    substringManipulation() {
        /*
            Inserting Text at a Position

            Someone gave you a file full of film titles in PascalCase, such
            as HaroldAndKumarGoToWhiteCastle. To make it easier to read, you
            want to insert a space at each position between a lowercase letter
             and an uppercase letter. This regex matches these exact positions:
        */

        regex = VerEx()
            .positiveLookBehind(VerEx().anyOf('a-z'))
            .positiveLookAhead(VerEx().anyOf('A-Z'))

        for(let movie of this.data) {
            this.movies.push(movie["title"].replace(regex.toRegExp(), ' '))
        }

        console.log(regex.toRegExp())

        if(this.next) {
            prompt.showToast({
                message: 'Moving on...',
                duration: 3000,
            })
            this.movies = []
            this.disappear = "fadeOut"
            setTimeout(() => {
                this.validated = true
                this.manipulated = false
                this.sanitized = true
                this.disappear = "fadeIn"
            }, 2000)
        }
    },
    fieldSanitization() {
        /*
            Checking Form Inputs for SQL Injection Attacks
         */

        regex = VerEx().any(';').oneOrMore()
        if(regex.toRegExp().test(this.username)) {
            prompt.showToast({
                message: 'Illegal Symbols Found!',
                duration: 3000,
            })
        }
        else {
            if(this.next) {
                prompt.showToast({
                    message: 'Moving on...',
                    duration: 3000,
                })
                this.disappear = "fadeOut"
                setTimeout(() => {
                    this.validated = true
                    this.manipulated = false
                    this.sanitized = false
                    this.inserted = true
                    this.disappear = "fadeIn"
                }, 2000)
            }
            else {
                prompt.showToast({
                    message: 'Clean Field!',
                    duration: 3000,
                })
                this.extractionMatching()
            }
        }
    },
    extractionMatching() {
        /*
            Query String Parameter Extraction

            Parsing, Cleaning and Validating Query String URL data on the
            server can be easily done without using any external packages
            or functionalities, just using plain old regex to extract parameters.
            This is how it is accomplished:
        */

        let url = `https://www.google.com?user=${this.username}&uuid=3d77df42s8`

        regex = VerEx()
            .anythingBut('?&')
            .positiveLookAhead('=')
            .anythingBut('&')

        console.log(url.match(regex.toRegExp()).reduce((prev, cur) => {
            let split = cur.split('=')
            prev += split[0] + ': ' + split[1] + '\n'
            return prev
        }, ''))

        console.log(regex.toRegExp())
    },
    dynamicInsertion() {
        /*
            JSX Alteration Programmatically

            A very popular flavor of JavaScript used in frameworks like React &
            Next.js is JSX(syntactical extension of JS)
            But if our API Data layer and View Layer is different, lookarounds
            can help with dynamically inserting data on the fly. Here's an example
            of the regular expression used:
        */

        let jsx = `<html><body style="height: 200px">...</body></html>
        `;

        console.log(jsx)

        regex = VerEx()
            .positiveLookAhead(VerEx().add('</body>'))

        setTimeout(() => {
            console.log(jsx.replace(regex.toRegExp(), `<h1>Data Pulled from API: ${this.username}</h1>`))
            console.log(regex.toRegExp())
        }, 5000)
    },
}
