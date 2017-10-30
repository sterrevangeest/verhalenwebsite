//test
console.log("hello");

// microinteraction 2
    var button = document.querySelector(" header section:nth-of-type(3)")
    var accountOptions = document.querySelector(".offcanvas-account")
    var page = document.querySelector("main")

    var accountSwitchUser1 = document.querySelector('.offcanvas-account div:nth-of-type(1) #user-1')
    var accountSwitchUser2 = document.querySelector('.offcanvas-account div:nth-of-type(1) #user-2')
    var accountSwitchUser3 = document.querySelector('.offcanvas-account div:nth-of-type(1) #user-3')
    var accountSwitchUser4 = document.querySelector('.offcanvas-account div:nth-of-type(1) #user-4')


    console.log(button);
    console.log(accountOptions);

    button.addEventListener('click', function () {
        //class op header section:last-child
    accountOptions.classList.toggle('active')
    page.classList.toggle("pageDown")
    button.classList.add("active")

    });


    accountSwitchUser1.addEventListener('click', function () {
        accountSwitchUser1.classList.toggle('active')
        //notactive
        accountSwitchUser2.classList.remove('active')
        accountSwitchUser3.classList.remove('active')
        accountSwitchUser4.classList.remove('active')

         //colorchange userbutton
        button.classList.toggle('user-1')

        button.classList.remove('user-2')
        button.classList.remove('user-4')
        button.classList.remove('user-3')
    });

    accountSwitchUser2.addEventListener('click', function () {
        accountSwitchUser2.classList.toggle('active')
        //notactive
        accountSwitchUser1.classList.remove('active')
        accountSwitchUser3.classList.remove('active')
        accountSwitchUser4.classList.remove('active')

        //colorchange userbutton
        button.classList.toggle('user-2')

        button.classList.remove('user-1')
        button.classList.remove('user-4')
        button.classList.remove('user-3')

    });


    accountSwitchUser3.addEventListener('click', function () {
        accountSwitchUser3.classList.toggle('active')
        //notactive
        accountSwitchUser1.classList.remove('active')
        accountSwitchUser2.classList.remove('active')
        accountSwitchUser4.classList.remove('active')

        //colorchange userbutton
        button.classList.toggle('user-3')

        button.classList.remove('user-2')
        button.classList.remove('user-4')
        button.classList.remove('user-1')
    });

    accountSwitchUser4.addEventListener('click', function () {
        accountSwitchUser4.classList.toggle('active')
        //notactive
        accountSwitchUser2.classList.remove('active')
        accountSwitchUser3.classList.remove('active')
        accountSwitchUser1.classList.remove('active')

        //colorchange userbutton
        button.classList.add('user-4')

        button.classList.remove('user-2')
        button.classList.remove('user-1')
        button.classList.remove('user-3')
    });






