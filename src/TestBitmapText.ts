/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

class TestBitmapText {

    public getDescription():string {
        return "这个项目展示了BitmapText";
    }

    public createExample():void {
        var bitmap1 = new ns_egret.BitmapText();
        bitmap1.texture = RES.getRes("font_png");
        bitmap1.bitmapFontData = this.getData();
        bitmap1.text = "HelloWorld";

        var container = new ns_egret.DisplayObjectContainer();
        ns_egret.MainContext.instance.stage.addChild(container);

        container.addChild(bitmap1);

        bitmap1.x = bitmap1.y = 50;
    }

    private getData(){
        return {"@":{"x":2,"y":2,"w":63,"h":65,"offX":3,"offY":9},"{":{"x":67,"y":2,"w":23,"h":65,"offX":2,"offY":9},"}":{"x":92,"y":2,"w":23,"h":65,"offX":1,"offY":9},")":{"x":117,"y":2,"w":20,"h":65,"offX":4,"offY":9},"(":{"x":139,"y":2,"w":19,"h":65,"offX":4,"offY":9},"j":{"x":160,"y":2,"w":18,"h":65,"offX":-3,"offY":9},"|":{"x":180,"y":2,"w":9,"h":65,"offX":6,"offY":9},"[":{"x":191,"y":2,"w":17,"h":64,"offX":4,"offY":10},"]":{"x":210,"y":2,"w":17,"h":64,"offX":1,"offY":10},"$":{"x":229,"y":2,"w":35,"h":62,"offX":2,"offY":6},"Q":{"x":266,"y":2,"w":50,"h":55,"offX":3,"offY":10},"%":{"x":318,"y":2,"w":54,"h":54,"offX":4,"offY":9},"O":{"x":374,"y":2,"w":48,"h":52,"offX":3,"offY":10},"G":{"x":424,"y":2,"w":47,"h":52,"offX":3,"offY":10},"C":{"x":2,"y":69,"w":45,"h":52,"offX":3,"offY":10},"&":{"x":49,"y":69,"w":43,"h":52,"offX":3,"offY":10},"S":{"x":94,"y":69,"w":41,"h":52,"offX":3,"offY":10},"U":{"x":137,"y":69,"w":41,"h":52,"offX":5,"offY":10},"#":{"x":180,"y":69,"w":39,"h":52,"offX":1,"offY":10},"6":{"x":221,"y":69,"w":35,"h":52,"offX":2,"offY":10},"8":{"x":258,"y":69,"w":35,"h":52,"offX":3,"offY":10},"9":{"x":295,"y":69,"w":35,"h":52,"offX":3,"offY":10},"b":{"x":332,"y":69,"w":34,"h":52,"offX":4,"offY":10},"d":{"x":368,"y":69,"w":34,"h":52,"offX":2,"offY":10},"g":{"x":404,"y":69,"w":34,"h":52,"offX":2,"offY":22},"3":{"x":440,"y":69,"w":34,"h":52,"offX":3,"offY":10},"0":{"x":476,"y":69,"w":34,"h":52,"offX":3,"offY":10},"?":{"x":2,"y":123,"w":34,"h":52,"offX":3,"offY":9},"J":{"x":38,"y":123,"w":30,"h":52,"offX":2,"offY":10},"f":{"x":70,"y":123,"w":24,"h":52,"offX":1,"offY":9},"/":{"x":96,"y":123,"w":22,"h":52,"offX":0,"offY":10},"\\":{"x":120,"y":123,"w":22,"h":52,"offX":0,"offY":10},"W":{"x":144,"y":123,"w":63,"h":51,"offX":1,"offY":10},"M":{"x":209,"y":123,"w":49,"h":51,"offX":5,"offY":10},"A":{"x":260,"y":123,"w":47,"h":51,"offX":0,"offY":10},"V":{"x":309,"y":123,"w":46,"h":51,"offX":0,"offY":10},"X":{"x":357,"y":123,"w":46,"h":51,"offX":0,"offY":10},"Y":{"x":405,"y":123,"w":46,"h":51,"offX":0,"offY":10},"R":{"x":453,"y":123,"w":45,"h":51,"offX":5,"offY":10},"D":{"x":2,"y":177,"w":43,"h":51,"offX":5,"offY":10},"K":{"x":47,"y":177,"w":42,"h":51,"offX":5,"offY":10},"N":{"x":91,"y":177,"w":41,"h":51,"offX":5,"offY":10},"T":{"x":134,"y":177,"w":41,"h":51,"offX":2,"offY":10},"Z":{"x":177,"y":177,"w":41,"h":51,"offX":1,"offY":10},"H":{"x":220,"y":177,"w":40,"h":51,"offX":5,"offY":10},"B":{"x":262,"y":177,"w":39,"h":51,"offX":5,"offY":10},"E":{"x":303,"y":177,"w":39,"h":51,"offX":5,"offY":10},"P":{"x":344,"y":177,"w":39,"h":51,"offX":5,"offY":10},"4":{"x":385,"y":177,"w":36,"h":51,"offX":1,"offY":10},"F":{"x":423,"y":177,"w":35,"h":51,"offX":5,"offY":10},"y":{"x":460,"y":177,"w":35,"h":51,"offX":1,"offY":23},"p":{"x":2,"y":230,"w":34,"h":51,"offX":4,"offY":23},"q":{"x":38,"y":230,"w":34,"h":51,"offX":2,"offY":23},"L":{"x":74,"y":230,"w":33,"h":51,"offX":5,"offY":10},"h":{"x":109,"y":230,"w":32,"h":51,"offX":4,"offY":10},"k":{"x":143,"y":230,"w":32,"h":51,"offX":4,"offY":10},"I":{"x":177,"y":230,"w":11,"h":51,"offX":6,"offY":10},"!":{"x":190,"y":230,"w":11,"h":51,"offX":6,"offY":10},"i":{"x":203,"y":230,"w":10,"h":51,"offX":4,"offY":10},"l":{"x":215,"y":230,"w":10,"h":51,"offX":4,"offY":10},"2":{"x":227,"y":230,"w":35,"h":50,"offX":2,"offY":11},"5":{"x":264,"y":230,"w":35,"h":50,"offX":3,"offY":12},"7":{"x":301,"y":230,"w":34,"h":50,"offX":3,"offY":11},"t":{"x":337,"y":230,"w":21,"h":50,"offX":1,"offY":11},"1":{"x":360,"y":230,"w":21,"h":50,"offX":7,"offY":11},";":{"x":383,"y":230,"w":11,"h":48,"offX":5,"offY":22},"e":{"x":396,"y":230,"w":36,"h":39,"offX":2,"offY":23},"o":{"x":434,"y":230,"w":36,"h":39,"offX":2,"offY":23},"a":{"x":472,"y":230,"w":35,"h":39,"offX":2,"offY":23},"c":{"x":2,"y":283,"w":33,"h":39,"offX":2,"offY":23},"s":{"x":37,"y":283,"w":33,"h":39,"offX":2,"offY":23},"w":{"x":72,"y":283,"w":51,"h":38,"offX":0,"offY":23},"m":{"x":125,"y":283,"w":50,"h":38,"offX":4,"offY":23},"v":{"x":177,"y":283,"w":35,"h":38,"offX":1,"offY":23},"x":{"x":214,"y":283,"w":35,"h":38,"offX":0,"offY":23},"z":{"x":251,"y":283,"w":34,"h":38,"offX":1,"offY":23},"n":{"x":287,"y":283,"w":32,"h":38,"offX":4,"offY":23},"u":{"x":321,"y":283,"w":32,"h":38,"offX":4,"offY":24},"r":{"x":355,"y":283,"w":23,"h":38,"offX":4,"offY":23},":":{"x":380,"y":283,"w":11,"h":38,"offX":6,"offY":23},"<":{"x":393,"y":283,"w":35,"h":36,"offX":4,"offY":18},">":{"x":430,"y":283,"w":35,"h":36,"offX":4,"offY":18},"+":{"x":467,"y":283,"w":35,"h":35,"offX":4,"offY":19},"^":{"x":2,"y":324,"w":31,"h":30,"offX":2,"offY":9},"*":{"x":35,"y":324,"w":25,"h":25,"offX":2,"offY":9},"=":{"x":62,"y":324,"w":35,"h":24,"offX":4,"offY":24},"":{"x":99,"y":324,"w":21,"h":21,"offX":3,"offY":10},"'":{"x":122,"y":324,"w":11,"h":21,"offX":3,"offY":10},",":{"x":135,"y":324,"w":11,"h":20,"offX":5,"offY":50},"~":{"x":148,"y":324,"w":36,"h":15,"offX":3,"offY":29},"`":{"x":186,"y":324,"w":16,"h":14,"offX":3,"offY":10},".":{"x":204,"y":324,"w":11,"h":11,"offX":6,"offY":50},"-":{"x":217,"y":324,"w":22,"h":10,"offX":2,"offY":37},"_":{"x":241,"y":324,"w":43,"h":9,"offX":-1,"offY":65},"space":{"x":286,"y":324,"w":0,"h":0,"offX":18,"offY":78}};
    }
}