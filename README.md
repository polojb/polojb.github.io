# WAPH-Web Application Programming and Hacking

## Instructor: Dr. Phu Phung

## Student

**Name**: Jaxon Polo

![Headshot](images/headshot.jpg)

**Email**: [polojb@mail.uc.edu](polojb@mail.uc.edu)

## Project 1 Report

### Overveiew

This project invloved devloping a professinal personal website hosted on GitHub Pages. The concepts that I learned while building this webpage was how to use and intigrate APIs into JavScript/HTML code, a fornt-end development framework (Bootstrap), and how to use cookies to personalize the webpage for seprate users.

Website URL: [https://polojb.github.io](https://polojb.github.io)  
GitHub Repository: [https://github.com/polojb/polojb.github.io](https://github.com/polojb/polojb.github.io)

---

### General Requirements

To create the the website on GitHub pages I first created a new repository named `polojb.github.io`. because my username was followed by github.io the repository is able to be hgosted by github and displayed to others. The only requirement is that the repository be public and the URL be valid.

To create a link to a new HTML page about this class (Web Application Programming and Hacking) I created an anchor tag that had a link to a sperate HTML page that I created that had all of the class specific work on it.  

---

### Non-technical Requirements

I learned the basics of Bootstrap in order to style the website I created instead of learning ang using CSS directly. This made creating my websire quicker and alowed me to get a more cohesive feel to the website with out strugling to make the CSS funtion in the way thatI want it to.

I also includeda page traker to both of the webpages that I creaed for this project using `analytics.withgoogle.com`. The code that was given to me to be able to track the usage of each page was:

```html
<!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6FV32SYSYL"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6FV32SYSYL');
        </script>
```

---

### Tecnical Requirements

I used jQueery and Bootstrap to give the wesite that I created a more profesiinal feel while implementing the JavaScript code that we went over in Lab 2. This includes the digital and analog clock, show/hide email, and the guess the age API that was dicussed in that lab.

The two public APIs that ended up using for this project were the joke API with some filters and Open Weather Map. The joke API now displays any catagory of joke and is on a timer to change the joke every minute. The weather API displays a graghic of the weather in the city that is typed into the search bar anlong with the temperature in farenheight and the weather conditions.

The cookies that are recorded by the computer when entering the website are used by the website in order to send a message to the user wecloming them if they are new and welcoming them back if they have been to the website before. The time and date of the previous visit is also displayed if they have visited before.
