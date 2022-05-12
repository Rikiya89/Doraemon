function setup() {
 createCanvas(400, 400);
  
  background(255,255,255)
}

function draw() {
  
  fill(233,231,41)
   square(50,30,307,20)
  
  //足5
  
  strokeWeight(1)
  fill(5,158,226)
  ellipse(153,235,38,73);
  
  
  //腹1
  
  strokeWeight(3)
  
  fill(5,158,226)
  
  ellipse(207,200,143,160);
  
  
  
  //足3
  
  fill(255,255,255)
  
  ellipse(222,290,68,59);
  
  
   //足1
  
   strokeWeight(2)
  
  fill(5,158,226)
  
  ellipse(227,258,70,73);
  
  
  
   //腹2
  
  strokeWeight(2)
  
  fill(255,255,255)
  
  ellipse(205,215,129,118);
  
  //四次元ポケット
  
  fill(255,255,255)
  
  arc(200,220,60,50,radians(0),radians(180),PIE);
  
  
  
  //輪郭1
  
   fill(5,158,226);
  
  strokeWeight(3)
  
  ellipse(203,104,178,168,);
  
  //輪郭2
  
  strokeWeight(2)
  
  fill(255,255,255)
  
  ellipse(198,114,168,149);
  
  //目1
  
  strokeWeight(2)
  
   fill(255,255,255)
  
  ellipse(204,49.25,33,33);
  
  //目2
  
  strokeWeight(2)
  
   fill(255,255,255)
  
  ellipse(233.25,58.25,33,33);
  
  //瞳1
  
  strokeWeight(1)
  
   fill(14,23,20)
  
  ellipse(215.636,50.724,8.991,9.987);
  
  //瞳2
  
  strokeWeight(1)
  
   fill(14,23,20)
  
  ellipse(222.386,53.224,8.991,9.987);
  
  //瞳3
  
  strokeWeight(1)
  
   fill(255,255,255)
  
  ellipse(216.5,50.5,3,3);
  
  //瞳4
  
  strokeWeight(1)
  
  fill(255,255,255)
  
  ellipse(222,53.5,3,3);
  
  //鼻
  
  strokeWeight(2)
  
  fill(231,120,91)
  
  ellipse(211.25,69,13,12);
  
  noFill()
  
  //髭１
  bezier(168.5,54.5,171.825, 60.003, 177.107, 68.746, 183, 78.5);
  
   //髭2
  bezier(151.25,80,157.492, 83.567, 166.854, 88.917,175.75, 94);
  
  //髭3
  bezier(148.5,107.5,153.187, 107.9, 164.548, 108.871,170, 109.337);
  
   //髭4
  bezier(235.5,91.5,240.012, 89.495, 248.096, 85.902,253.5, 83.5);

  //髭5
  bezier(228.59,108.418,235.805, 109.983, 247.758, 112.575,256.91, 114.56);
  
   //髭6
  bezier(221.25,124.475,229.244, 130.045, 237.466, 135.59,244.5, 140.5);
  
   //鼻筋
  bezier(208.58,74.217,200, 102.694, 193.121, 128.83,188.596, 152.125);
  
  //口1
  bezier(141.356,76.049,141.609,116.891, 159.312, 138.008,188.015, 151.665);
  
  //口2
  bezier(274,117.524,256.53,144.957,230.502, 155.964,189.533,152.17);
  
  
  
  //首輪
  fill(219,51,34)
  
  ellipse(200,190,60,10);
  
   //腕1
  
  fill(5,158,226)
  
  ellipse(154,181,68,40);
  
  //手1
  
  fill(255,255,255)
  
  ellipse(173,179,38,43);
  
  //腕2
  
  fill(5,158,226)
  
  ellipse(267,181,68,40);
  
  //手2
  
  fill(255,255,255)
  
  ellipse(242,181,38,43);
  
  
  
  
  //鈴1
  
  fill(209,231,141)
  
  ellipse(200,196,16,17);
  
  
  //鈴2
  noFill()
  
  bezier(194,200,207, 196, 213, 194, 219, 194);
  
   //鈴3
  
  fill(14,23,20)
  
  ellipse(201,201,2,2);
  
  //足1
  
  strokeWeight(3)
  
  fill(255,255,255)
  
  ellipse(125,260,75,70);
  
  //尻尾1
   noFill()
  
  bezier(260,249,285,268, 290, 268, 294, 268);
  
  //尻尾2
  
   strokeWeight(1)
  fill(5,158,226)
  ellipse(301,266,12,12);
  
   //ヘリトンボ
  
   fill(5,158,226)
  
  bezier(287,72,294,68, 298, 65, 304, 61);
  
   //ヘリトンボ2
  fill(148,148,148)
  ellipse(308,61,23,32);
  
 
  fill(0);
   textFont("Hiragino Maru Gothic ProN W4");
  textSize(27)
  text("未来の国からはるばると", 50, 370);
  
  fill(0);
   textFont("Kozuka Gothic Pr6");
  textSize(25)
  text("第   巻", 55, 60);
  
  fill(233,6,14)
   square(79,37,26.5,)
  
  fill(255);
   textFont("Hiragino Maru Gothic ProN W4");
  textSize(26)
  text("0", 82, 60);
   
}

