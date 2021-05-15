class Form{
    constructor(){}

    display(){
        var title = createElement('h2')
        title.html("car bash")
        title.position(130,0)
 
        var input = createInput("write your name ")
        var button = createButton("start")
        var greeting = createElement('h3')

        input.position(130,160)
        button.position(250,200)

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value()

            playerCount+=1
            player.update(name)

            player.updateCount(playerCount)
            greeting.html("welcome to car bash " + name)
            greeting.position(130,160)
        })
    }
}

