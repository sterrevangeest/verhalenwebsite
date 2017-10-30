console.log('hi')
// microinteraction 1

    //var downloadIcon = document.querySelectorAll("section article header h2");
    var downloadIcon = document.querySelector("section article header h2");
    var downloadSwitch = document.querySelector("main section:nth-of-type(3) label")

    console.log(downloadIcon);
    console.log(downloadSwitch);

    downloadSwitch.addEventListener('click', function(){
//class op header section:last-child
    downloadIcon.classList.add('loadgrey')

    });
