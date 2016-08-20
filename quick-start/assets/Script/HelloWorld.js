cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        startbutton: {
            default: null,
            type: cc.Button
        },
        startbuttonnew: {
            default: null,
            type: cc.Button
        },
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        
        this.node.on('mousedown', function(event)
        {
           console.log('main scene mousedown') 
        });
        
        this.startbuttonnew.node.on('mousedown', function(event)
        {
           console.log('startbuttonnew mousedown') 
        });
    },

    // called every frame
    update: function (dt) {
    },
    onLaunched :function () {
    console.log('Scene ' + ' launched');
    },
    on_start_button_click: function() {
        // 切换到另外一个场景。
        console.log("start game scene");
        cc.director.loadScene("game", this.onLaunched);
        // end 
    }
});
