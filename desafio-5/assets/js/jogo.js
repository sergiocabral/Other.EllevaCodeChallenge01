var _0x2264=['rgba(255,\x20255,\x20255,\x20','grid','stepCount','error','braid','isMarked','checkOver','dblclick','afterMove','prototype','recomecar','stringify','beforeGenrate','ESQUERDA','parse','foundEndNode','stepY','backtrace','checkCount','list','canvas','setCurrent','none','fillText','fillStyle','flag','DIREITA','getValidNeighbors','perfect','setItem','width','velocidade','reload','currentDirCount','green','prompt','size','elleva-code-challenge-speed','CIMA','#fcb601','getRoadCount','onload','neighbors','random','#131315','moveTo','endNode','elleva-code-challenge-maze','12px\x20Arial','Direction','converterDirecao','afterGenrate','alwaysBacktrace','push','getItem','#432D7D','addEventListener','counter','length','#432d7d','block','min','indexOf','#00b2a8','height','initGrid','isOver','style','trace','startNode','BAIXO','Step\x20Count\x20:\x20','getTraceIndex','movimentosPossiveis','getElementById','value','move','fillRect','white','escolherMovimento','updateValidNeighbors','iniciar','isValid','display','currentNode','onInit','totalJogadas','innerHTML','init','getRandomNode','currentDir','nextStep'];(function(_0x4545ca,_0x2264a1){var _0x4d2e02=function(_0xa6c8cb){while(--_0xa6c8cb){_0x4545ca['push'](_0x4545ca['shift']());}};_0x4d2e02(++_0x2264a1);}(_0x2264,0xc2));var _0x4d2e=function(_0x4545ca,_0x2264a1){_0x4545ca=_0x4545ca-0x0;var _0x4d2e02=_0x2264[_0x4545ca];return _0x4d2e02;};var _0x29e825=_0x4d2e;'use strict';var Maze=function(_0xa6c8cb){for(var _0x254d96 in _0xa6c8cb){this[_0x254d96]=_0xa6c8cb[_0x254d96];}};Maze[_0x29e825('0x5b')]={'constructor':Maze,'width':0x0,'height':0x0,'grid':null,'currentDir':0x0,'currentDirCount':0x0,'currentNode':null,'startNode':null,'endNode':null,'alwaysBacktrace':![],'init':function(){var _0x1f5e94=_0x29e825;this[_0x1f5e94('0x3a')]=[],this[_0x1f5e94('0x1a')]=this['width']*this[_0x1f5e94('0x36')],this[_0x1f5e94('0x37')](),this['onInit']();},'load':function(_0x3fcf11){var _0x50d4f1=_0x29e825;this[_0x50d4f1('0x3a')]=[],this[_0x50d4f1('0x53')]=_0x3fcf11,this['size']=this[_0x50d4f1('0x53')][_0x50d4f1('0x30')]*this[_0x50d4f1('0x53')][0x0][_0x50d4f1('0x30')],this[_0x50d4f1('0x4b')]();},'initGrid':function(){var _0x59b544=_0x29e825,_0x397a24=this[_0x59b544('0x53')]=[];for(var _0x1db3fc=0x0;_0x1db3fc<this[_0x59b544('0x36')];_0x1db3fc++){var _0x2a3e4c=[];_0x397a24[_0x59b544('0x2b')](_0x2a3e4c);for(var _0x3a4e77=0x0;_0x3a4e77<this[_0x59b544('0x14')];_0x3a4e77++){var _0x58d3b6={'x':_0x3a4e77,'y':_0x1db3fc,'value':0x0,'counter':0x0};_0x2a3e4c[_0x59b544('0x2b')](_0x58d3b6);}}},'onInit':function(){},'random':function(_0x1fed29,_0x7fb63d){var _0xb9d649=_0x29e825;return(_0x7fb63d-_0x1fed29+0x1)*Math[_0xb9d649('0x21')]()+_0x1fed29>>0x0;},'getNode':function(_0x32a23f,_0x5c0e18){var _0x45848d=_0x29e825;return this[_0x45848d('0x53')][_0x5c0e18][_0x32a23f];},'getRandomNode':function(){var _0x1a73f8=_0x29e825,_0x36089a=this[_0x1a73f8('0x21')](0x0,this[_0x1a73f8('0x36')]-0x1),_0x1acd08=this[_0x1a73f8('0x21')](0x0,this['width']-0x1);return this[_0x1a73f8('0x53')][_0x36089a][_0x1acd08];},'setMark':function(_0x45cf0b,_0x1e4b9a){return _0x45cf0b['value']|=_0x1e4b9a;},'removeMark':function(_0x331453,_0x362fe9){var _0x43562a=_0x29e825;return _0x331453[_0x43562a('0x41')]&=~_0x362fe9;},'isMarked':function(_0x57a002,_0x1fb4bb){var _0x15b191=_0x29e825;return(_0x57a002[_0x15b191('0x41')]&_0x1fb4bb)===_0x1fb4bb;},'setStart':function(_0x2935f0,_0x45ee41){var _0x2ee3ab=_0x29e825,_0x59b9ff=this['grid'][_0x45ee41][_0x2935f0];this[_0x2ee3ab('0x3b')]=_0x59b9ff;},'setEnd':function(_0x331fcc,_0x1dc4ef){var _0x158e5f=_0x29e825,_0x1177f9=this['grid'][_0x1dc4ef][_0x331fcc];this[_0x158e5f('0x24')]=_0x1177f9;},'getRoadCount':function(_0x52430f){var _0x2096e5=_0x29e825,_0x3e2b92=0x0;return this[_0x2096e5('0x57')](_0x52430f,Maze[_0x2096e5('0x27')]['N'])&&_0x3e2b92++,this[_0x2096e5('0x57')](_0x52430f,Maze[_0x2096e5('0x27')]['E'])&&_0x3e2b92++,this[_0x2096e5('0x57')](_0x52430f,Maze[_0x2096e5('0x27')]['S'])&&_0x3e2b92++,this[_0x2096e5('0x57')](_0x52430f,Maze[_0x2096e5('0x27')]['W'])&&_0x3e2b92++,_0x3e2b92;},'setCurrent':function(_0x3b62c1){var _0x159e72=_0x29e825;this['currentNode']=_0x3b62c1,this[_0x159e72('0x20')]=this[_0x159e72('0x11')](_0x3b62c1),this[_0x159e72('0x20')]&&_0x3b62c1['value']===0x0&&(this['trace'][_0x159e72('0x2b')](_0x3b62c1),this['onTrace'](_0x3b62c1));},'onTrace':function(_0x35501a){},'moveTo':function(_0x25c59c,_0x1a3d65){var _0x385c07=_0x29e825;this['beforeMove'](_0x25c59c),this[_0x385c07('0x50')]==_0x1a3d65?this[_0x385c07('0x17')]++:(this[_0x385c07('0x50')]=_0x1a3d65,this[_0x385c07('0x17')]=0x1),this['currentNode'][_0x385c07('0x41')]|=_0x1a3d65,this[_0x385c07('0xb')](_0x25c59c),_0x25c59c[_0x385c07('0x41')]|=Maze[_0x385c07('0x27')]['opposite'][_0x1a3d65],this[_0x385c07('0x5a')](_0x25c59c);},'beforeMove':function(_0x4950e6){},'afterMove':function(_0x38ca28){},'generate':function(){var _0x298828=_0x29e825;this[_0x298828('0x2')](),this['setCurrent'](this[_0x298828('0x3b')]),this[_0x298828('0x54')]=0x0;while(this[_0x298828('0x51')]()){this[_0x298828('0x54')]++;if(this[_0x298828('0x38')]()===!![])break;}console['log'](_0x298828('0x3d')+this[_0x298828('0x54')]),this[_0x298828('0x29')]();},'beforeGenrate':function(){},'afterGenrate':function(){},'isOver':function(){},'nextStep':function(){var _0x1b0412=_0x29e825;if(!this[_0x1b0412('0x20')])return this['beforeBacktrace'](),this[_0x1b0412('0x7')]();var _0x1f5130=this['getNeighbor']();return this[_0x1b0412('0x23')](_0x1f5130[0x0],_0x1f5130[0x1]),this['updateCurrent'](),!![];},'beforeBacktrace':function(){},'backtrace':function(){var _0x3b54db=_0x29e825,_0x5bfb8=this[_0x3b54db('0x3a')][_0x3b54db('0x30')];while(_0x5bfb8>0x0){var _0x3c48bb=this[_0x3b54db('0x3e')](),_0x3b9859=this[_0x3b54db('0x3a')][_0x3c48bb],_0x216168=this[_0x3b54db('0x11')](_0x3b9859);if(_0x216168)return this[_0x3b54db('0x4a')]=_0x3b9859,this[_0x3b54db('0x20')]=_0x216168,!![];else this[_0x3b54db('0x3a')]['splice'](_0x3c48bb,0x1),_0x5bfb8--;}return![];},'setRoom':function(_0x449cd4,_0x2d0da4,_0x3c20c8,_0x3c22be){var _0x4cc871=_0x29e825,_0x1d31b1=this[_0x4cc871('0x53')],_0x35918b=_0x449cd4+_0x3c20c8,_0x321dd=_0x2d0da4+_0x3c22be;for(var _0x2d826d=_0x2d0da4;_0x2d826d<_0x321dd;_0x2d826d++){var _0x2beba1=_0x1d31b1[_0x2d826d];if(!_0x2beba1)continue;for(var _0xc20de1=_0x449cd4;_0xc20de1<_0x35918b;_0xc20de1++){var _0x2d6089=_0x2beba1[_0xc20de1];_0x2d6089&&(_0x2d6089[_0x4cc871('0x41')]=Maze[_0x4cc871('0x27')]['ALL']);}}},'setBlock':function(_0xddd42e,_0x15d2cc,_0x17195f,_0x2d123c){var _0x24b59c=_0x29e825,_0x1afe9a=this['grid'],_0x6444cc=_0xddd42e+_0x17195f,_0xf9acaf=_0x15d2cc+_0x2d123c;for(var _0x5121ca=_0x15d2cc;_0x5121ca<_0xf9acaf;_0x5121ca++){var _0x294a64=_0x1afe9a[_0x5121ca];if(!_0x294a64)continue;for(var _0x2102a2=_0xddd42e;_0x2102a2<_0x6444cc;_0x2102a2++){var _0x5191b6=_0x294a64[_0x2102a2];_0x5191b6&&(_0x5191b6[_0x24b59c('0x41')]=null);}}},'getValidNeighbors':function(_0x35d38b){var _0xc5cd3e=_0x29e825,_0x16bace=[],_0x461322={},_0x8d6d4f=_0x35d38b['x'],_0x1da16e=_0x35d38b['y'],_0x40528a,_0x1be6ef;_0x40528a=Maze['Direction']['N'],_0x1be6ef=_0x1da16e>0x0?this[_0xc5cd3e('0x53')][_0x1da16e-0x1][_0x8d6d4f]:null,this[_0xc5cd3e('0x48')](_0x1be6ef,_0x35d38b,_0x40528a)&&_0x16bace['push'](_0x461322[_0x40528a]=[_0x1be6ef,_0x40528a]),_0x40528a=Maze[_0xc5cd3e('0x27')]['E'],_0x1be6ef=this['grid'][_0x1da16e][_0x8d6d4f+0x1],this[_0xc5cd3e('0x48')](_0x1be6ef,_0x35d38b,_0x40528a)&&_0x16bace[_0xc5cd3e('0x2b')](_0x461322[_0x40528a]=[_0x1be6ef,_0x40528a]),_0x40528a=Maze['Direction']['S'],_0x1be6ef=_0x1da16e<this[_0xc5cd3e('0x36')]-0x1?this[_0xc5cd3e('0x53')][_0x1da16e+0x1][_0x8d6d4f]:null,this['isValid'](_0x1be6ef,_0x35d38b,_0x40528a)&&_0x16bace[_0xc5cd3e('0x2b')](_0x461322[_0x40528a]=[_0x1be6ef,_0x40528a]),_0x40528a=Maze[_0xc5cd3e('0x27')]['W'],_0x1be6ef=this[_0xc5cd3e('0x53')][_0x1da16e][_0x8d6d4f-0x1],this[_0xc5cd3e('0x48')](_0x1be6ef,_0x35d38b,_0x40528a)&&_0x16bace['push'](_0x461322[_0x40528a]=[_0x1be6ef,_0x40528a]),this[_0xc5cd3e('0x46')](_0x16bace,_0x461322);if(_0x16bace[_0xc5cd3e('0x30')]>0x0)return _0x461322[_0xc5cd3e('0x9')]=_0x16bace,_0x461322;return null;},'updateValidNeighbors':function(_0x319224,_0xf2c15a){},'isValid':function(_0x54c8e2,_0x34b341,_0x330c41){var _0x1ef15b=_0x29e825;return _0x54c8e2&&_0x54c8e2[_0x1ef15b('0x41')]===0x0;},'updateCurrent':function(){var _0x2219a7=_0x29e825;this[_0x2219a7('0x2a')]&&this['backtrace']();},'getNeighbor':function(){var _0x164668=_0x29e825,_0x20fb5a=this[_0x164668('0x20')][_0x164668('0x9')],_0x3d5810=_0x20fb5a[_0x20fb5a[_0x164668('0x30')]*Math[_0x164668('0x21')]()>>0x0];return _0x3d5810;},'getTraceIndex':function(){var _0x10a9d8=_0x29e825,_0x362711=this[_0x10a9d8('0x3a')][_0x10a9d8('0x30')]-0x1;return _0x362711;},'move':function(_0x5e641c,_0xb3cc8d){var _0x26b3b8=_0x29e825,_0x584f02=this[_0x26b3b8('0x28')](_0xb3cc8d),_0x482209=_0x5e641c['x']+Maze['Direction']['stepX'][_0x584f02],_0x16010c=_0x5e641c['y']+Maze[_0x26b3b8('0x27')][_0x26b3b8('0x6')][_0x584f02];return this['grid'][_0x16010c][_0x482209]['counter']++,{'x':_0x482209,'y':_0x16010c};},'movimentosPossiveis':function(_0x33257b){var _0x111c2a=_0x29e825;if(this[_0x111c2a('0x24')]['x']===_0x33257b['x']&&this[_0x111c2a('0x24')]['y']===_0x33257b['y'])return null;var _0x39bff0=this[_0x111c2a('0x53')][_0x33257b['y']][_0x33257b['x']],_0x3f6c1f=[];if(_0x39bff0){var _0x6e04a5=_0x39bff0[_0x111c2a('0x41')];(_0x6e04a5&Maze[_0x111c2a('0x27')]['N'])===Maze[_0x111c2a('0x27')]['N']&&_0x3f6c1f[_0x111c2a('0x2b')]('CIMA'),(_0x6e04a5&Maze['Direction']['E'])===Maze[_0x111c2a('0x27')]['E']&&_0x3f6c1f['push'](_0x111c2a('0x10')),(_0x6e04a5&Maze['Direction']['S'])===Maze['Direction']['S']&&_0x3f6c1f[_0x111c2a('0x2b')](_0x111c2a('0x3c')),(_0x6e04a5&Maze[_0x111c2a('0x27')]['W'])===Maze['Direction']['W']&&_0x3f6c1f['push'](_0x111c2a('0x3'));}return _0x3f6c1f;},'converterDirecao':function(_0x378fe4){var _0x164bb7=_0x29e825;switch(_0x378fe4){case _0x164bb7('0x1c'):return Maze['Direction']['N'];case _0x164bb7('0x3c'):return Maze[_0x164bb7('0x27')]['S'];case'DIREITA':return Maze[_0x164bb7('0x27')]['E'];case'ESQUERDA':return Maze[_0x164bb7('0x27')]['W'];}}},Maze[_0x29e825('0x27')]={'N':0x1,'S':0x2,'E':0x4,'W':0x8,'ALL':0x1|0x2|0x4|0x8,'opposite':{0x1:0x2,0x2:0x1,0x4:0x8,0x8:0x4},'stepX':{0x1:0x0,0x2:0x0,0x4:0x1,0x8:-0x1},'stepY':{0x1:-0x1,0x2:0x1,0x4:0x0,0x8:0x0}};var maze=new Maze({'width':0x14,'height':0x14,'perfect':!![],'braid':![],'checkOver':![],'onInit':function(){var _0x4e720c=_0x29e825;this[_0x4e720c('0x58')]=![],this['checkCount']={},this[_0x4e720c('0x5')]=![];},'getNeighbor':function(){var _0x50636b=_0x29e825,_0x1465e8=this[_0x50636b('0x20')][_0x50636b('0x9')],_0x378624=_0x1465e8[_0x1465e8[_0x50636b('0x30')]*Math[_0x50636b('0x21')]()>>0x0];return _0x378624;},'isValid':function(_0x4afcae,_0x553cd8,_0x15e855){var _0x295adb=_0x29e825;if(!_0x4afcae||_0x4afcae[_0x295adb('0x41')]===null)return![];if(_0x4afcae[_0x295adb('0x41')]===0x0)return!![];if(this[_0x295adb('0x12')]||this[_0x295adb('0x56')])return![];var _0x25b7e9=_0x4afcae['x'],_0x18788e=_0x4afcae['y'];this['checkCount'][_0x25b7e9+'-'+_0x18788e]=this[_0x295adb('0x8')][_0x25b7e9+'-'+_0x18788e]||0x0;var _0x12b670=++this[_0x295adb('0x8')][_0x25b7e9+'-'+_0x18788e];return Math[_0x295adb('0x21')]()<0.3&&_0x12b670<0x3;},'beforeBacktrace':function(){var _0x30401f=_0x29e825;if(!this['braid'])return;var _0x1c446c=[],_0x562d77=this[_0x30401f('0x4a')],_0x38d67c=_0x562d77['x'],_0x51e5ff=_0x562d77['y'],_0x3e73d1,_0x21c17d,_0x23f214,_0xde979d=null,_0x3bdb03=this['currentDir'],_0x1811de=function(){var _0x5aaa2f=_0x30401f;_0x23f214=Maze[_0x5aaa2f('0x27')]['opposite'][_0x21c17d],_0x3e73d1&&_0x3e73d1[_0x5aaa2f('0x41')]!==null&&(_0x3e73d1[_0x5aaa2f('0x41')]&_0x23f214)!==_0x23f214&&(_0x1c446c[_0x5aaa2f('0x2b')]([_0x3e73d1,_0x21c17d]),_0x21c17d==_0x3bdb03&&(_0xde979d=[_0x3e73d1,_0x21c17d]));};_0x21c17d=Maze[_0x30401f('0x27')]['N'],_0x3e73d1=_0x51e5ff>0x0?this[_0x30401f('0x53')][_0x51e5ff-0x1][_0x38d67c]:null,_0x1811de(),!_0xde979d&&(_0x21c17d=Maze[_0x30401f('0x27')]['E'],_0x3e73d1=this[_0x30401f('0x53')][_0x51e5ff][_0x38d67c+0x1],_0x1811de()),!_0xde979d&&(_0x21c17d=Maze[_0x30401f('0x27')]['S'],_0x3e73d1=_0x51e5ff<this[_0x30401f('0x36')]-0x1?this[_0x30401f('0x53')][_0x51e5ff+0x1][_0x38d67c]:null,_0x1811de()),!_0xde979d&&(_0x21c17d=Maze[_0x30401f('0x27')]['W'],_0x3e73d1=this['grid'][_0x51e5ff][_0x38d67c-0x1],_0x1811de()),_0x1c446c=_0xde979d||_0x1c446c[_0x1c446c[_0x30401f('0x30')]*Math[_0x30401f('0x21')]()>>0x0],this[_0x30401f('0x23')](_0x1c446c[0x0],_0x1c446c[0x1]);},'updateCurrent':function(){var _0x3bf1ce=_0x29e825;if(this[_0x3bf1ce('0x56')])return;Math[_0x3bf1ce('0x21')]()<=0.1&&this[_0x3bf1ce('0x7')]();},'getTraceIndex':function(){var _0x6ca99a=_0x29e825,_0x1821b8=this[_0x6ca99a('0x3a')][_0x6ca99a('0x30')];if(this[_0x6ca99a('0x56')])return _0x1821b8-0x1;var _0x4568fb=Math['random'](),_0x26431e=0x0;if(_0x4568fb<0.5)_0x26431e=_0x1821b8-0x1;else{if(_0x4568fb<0.7)_0x26431e=_0x1821b8>>0x1;else _0x4568fb<0.8&&(_0x26431e=_0x1821b8*Math[_0x6ca99a('0x21')]()>>0x0);}return _0x26431e;},'afterGenrate':function(){var _0x1bbed9=_0x29e825;this[_0x1bbed9('0x56')]&&this[_0x1bbed9('0x1e')](this[_0x1bbed9('0x3b')])<0x2&&(this['currentDirCount']=0x3e8,this[_0x1bbed9('0xb')](this[_0x1bbed9('0x3b')]),this['nextStep']());},'isOver':function(){var _0x3f15fc=_0x29e825;if(!this[_0x3f15fc('0x58')])return![];this[_0x3f15fc('0x4a')]==this[_0x3f15fc('0x24')]&&(this[_0x3f15fc('0x5')]=!![]);if(this[_0x3f15fc('0x5')]&&this[_0x3f15fc('0x54')]>=this['size']/0x2)return!![];return![];}});window[_0x29e825('0x1f')]=function(){start();};function createPerfectMaze(){createMaze(!![],![]);}function createBraidMaze(){createMaze(![],!![]);}function reload(){var _0x796545=_0x29e825;maze[_0x796545('0x16')]([[]]),renderMaze(context,maze,[]);}function createMaze(_0x1a6dcc,_0x1ebe22){var _0x4dcd16=_0x29e825;maze[_0x4dcd16('0x12')]=_0x1a6dcc||![],maze[_0x4dcd16('0x56')]=_0x1ebe22||![],maze[_0x4dcd16('0x4e')](),maze[_0x4dcd16('0x3b')]=maze[_0x4dcd16('0x4f')]();do{maze[_0x4dcd16('0x24')]=maze[_0x4dcd16('0x4f')]();}while(maze[_0x4dcd16('0x3b')]==maze['endNode']);maze['generate'](),renderMaze(context,maze,[]);}function iniciar(){var _0x4fc941=_0x29e825;zerarContagem(),renderMaze(context,maze,[]),pare=![],totalJogadasRealizadas=0x0;var _0x301717=new Jogador({'x':maze[_0x4fc941('0x3b')]['x'],'y':maze[_0x4fc941('0x3b')]['y'],'estado':{}});setTimeout(function(){proximaJogada(_0x301717);},getVelocidade()),toggleButtonIniciar(![]),toggleButtonRecomecar(![]),toggleButtonParar(!![]),$id(_0x4fc941('0xf'))[_0x4fc941('0x39')]['display']=_0x4fc941('0xc');}function parar(_0x24bbaa){var _0x1698a2=_0x29e825;pare=!![],_0x24bbaa?(toggleButtonIniciar(![]),toggleButtonRecomecar(!![])):(toggleButtonIniciar(!![]),toggleButtonRecomecar(![])),toggleButtonParar(![]),$id(_0x1698a2('0xf'))['style'][_0x1698a2('0x49')]=_0x1698a2('0xc');}function toggleButtonIniciar(_0x553b80){var _0x5dfff9=_0x29e825;$id(_0x5dfff9('0x47'))[_0x5dfff9('0x39')][_0x5dfff9('0x49')]=_0x553b80?_0x5dfff9('0x32'):_0x5dfff9('0xc');}function toggleButtonParar(_0x413c6e){var _0x14c5c8=_0x29e825;$id('parar')[_0x14c5c8('0x39')]['display']=_0x413c6e?_0x14c5c8('0x32'):_0x14c5c8('0xc');}function toggleButtonRecomecar(_0x123c36){var _0x276728=_0x29e825;$id(_0x276728('0x0'))[_0x276728('0x39')][_0x276728('0x49')]=_0x123c36?'block':_0x276728('0xc');}var pare=![],totalJogadasRealizadas=0x0;function proximaJogada(_0x519179){var _0x1de7f0=_0x29e825;totalJogadasRealizadas++,updateTotalJogadas(totalJogadasRealizadas);if(pare)return;var _0x288374=maze[_0x1de7f0('0x3f')]({'x':_0x519179['x'],'y':_0x519179['y']});if(_0x288374){var _0x42476e=_0x519179[_0x1de7f0('0x45')](_0x288374);if(_0x288374[_0x1de7f0('0x34')](_0x42476e)===-0x1)console[_0x1de7f0('0x55')]('Movimento\x20escolhido\x20é\x20inválido!');else{var _0xac23f2=maze[_0x1de7f0('0x42')]({'x':_0x519179['x'],'y':_0x519179['y']},_0x42476e),_0x20141c=maze['grid'][_0xac23f2['y']][_0xac23f2['x']][_0x1de7f0('0x2f')],_0x2b97ac=_0x20141c*0xa/0x64,_0x5d66ee=_0x1de7f0('0x52')+_0x2b97ac+')';renderJogador(context,maze,{'x':_0x519179['x'],'y':_0x519179['y']},_0x5d66ee,!![]),renderJogador(context,maze,_0xac23f2,_0x1de7f0('0x31'),![]),setTimeout(function(){_0x519179['x']=_0xac23f2['x'],_0x519179['y']=_0xac23f2['y'],proximaJogada(_0x519179);},getVelocidade());}}else informarConclusao();}function destacarLugaresOndePassouApenasUmaVez(){var _0x59d099=_0x29e825,_0x399c5b=[Maze[_0x59d099('0x27')]['N'],Maze[_0x59d099('0x27')]['S'],Maze[_0x59d099('0x27')]['W'],Maze[_0x59d099('0x27')]['E']];for(var _0x22103f=0x0;_0x22103f<maze[_0x59d099('0x53')]['length'];_0x22103f++){for(var _0x557a43=0x0;_0x557a43<maze[_0x59d099('0x53')][_0x22103f][_0x59d099('0x30')];_0x557a43++){maze[_0x59d099('0x53')][_0x22103f][_0x557a43][_0x59d099('0x2f')]===0x1&&((maze[_0x59d099('0x3b')]['x']!==_0x557a43||maze[_0x59d099('0x3b')]['y']!==_0x22103f)&&(maze['endNode']['x']!==_0x557a43||maze[_0x59d099('0x24')]['y']!==_0x22103f)&&_0x399c5b[_0x59d099('0x34')](maze[_0x59d099('0x53')][_0x22103f][_0x557a43]['value'])===-0x1&&renderJogador(context,maze,{'x':_0x557a43,'y':_0x22103f},_0x59d099('0x18'),!![]));}}}function zerarContagem(){var _0x18553e=_0x29e825;for(var _0x4b40d6=0x0;_0x4b40d6<maze['grid']['length'];_0x4b40d6++){for(var _0x67a526=0x0;_0x67a526<maze[_0x18553e('0x53')][_0x4b40d6][_0x18553e('0x30')];_0x67a526++){maze[_0x18553e('0x53')][_0x4b40d6][_0x67a526][_0x18553e('0x2f')]=0x0;}}}function updateTotalJogadas(_0x3e1419){var _0x5e0445=_0x29e825;$id(_0x5e0445('0x4c'))[_0x5e0445('0x4d')]=_0x3e1419;}function informarConclusao(){var _0x177557=_0x29e825;$id('flag')[_0x177557('0x39')][_0x177557('0x49')]=_0x177557('0x32'),toggleButtonRecomecar(!![]),toggleButtonParar(![]);}function getVelocidade(){var _0x383d09=_0x29e825,_0x30ab6e=parseInt(document[_0x383d09('0x40')]('velocidade')[_0x383d09('0x41')]);switch(_0x30ab6e){case 0x1:return 0x1f4;case 0x2:return 0xc8;case 0x3:return 0x32;case 0x4:return 0x19;}}function $id(_0x58c7d5){return document['getElementById'](_0x58c7d5);}var canvas,context;function start(){var _0x5b6649=_0x29e825;canvas=$id(_0x5b6649('0xa')),context=canvas['getContext']('2d');var _0x15401c=localStorage[_0x5b6649('0x2c')](_0x5b6649('0x1b'));_0x15401c&&($id(_0x5b6649('0x15'))[_0x5b6649('0x41')]=_0x15401c);var _0x2b588f=localStorage[_0x5b6649('0x2c')](_0x5b6649('0x25'));_0x2b588f?renderMazeFromJson(_0x2b588f):(createPerfectMaze(),storageCurrentMaze()),canvas[_0x5b6649('0x2e')](_0x5b6649('0x59'),function(_0x3b8d06){var _0x17f00a=_0x5b6649,_0x573f2f=window[_0x17f00a('0x19')]();renderMazeFromJson(_0x573f2f),storageCurrentMaze();});}function renderMazeFromJson(_0x598ba4){var _0x35e575=_0x29e825,_0x1074b7=JSON[_0x35e575('0x4')](_0x598ba4);maze[_0x35e575('0x53')]=_0x1074b7[_0x35e575('0x53')],maze['startNode']=_0x1074b7[_0x35e575('0x3b')],maze['endNode']=_0x1074b7[_0x35e575('0x24')],renderMaze(context,maze,[]);}function storageCurrentMaze(){var _0x1faeac=_0x29e825,_0x5b4839={'grid':maze['grid'],'startNode':maze[_0x1faeac('0x3b')],'endNode':maze['endNode']};localStorage[_0x1faeac('0x13')](_0x1faeac('0x25'),JSON[_0x1faeac('0x1')](_0x5b4839));}function onChangeSpeed(_0x42927d){var _0x48dc20=_0x29e825;localStorage[_0x48dc20('0x13')](_0x48dc20('0x1b'),_0x42927d);}function onReloadPlayer(){var _0x389aab=_0x29e825;location[_0x389aab('0x16')]();}function onGenerateMaze(){parar(![]),createPerfectMaze(),storageCurrentMaze(),updateTotalJogadas(0x0);}function renderJogador(_0x2ceb3e,_0x100b25,_0x359804,_0x4fbfd2,_0x23bac7){var _0x3832ca=_0x29e825,_0x2d3fa0=0x258,_0x4f0b2f=0x258,_0x1ddca0=0xa,_0x24fa91=(_0x2d3fa0-_0x1ddca0*0x2)/_0x100b25['width'];_0x24fa91=Math[_0x3832ca('0x33')](_0x24fa91,(_0x4f0b2f-_0x1ddca0*0x2)/_0x100b25['height'])>>0x0,_0x24fa91=_0x24fa91;var _0x156dd6=_0x1ddca0,_0x2ab3c7=_0x1ddca0,_0x69d8fd=_0x24fa91,_0x14e662=_0x24fa91,_0xe4e66d=_0x359804['x']*_0x69d8fd+_0x156dd6,_0x52f811=_0x359804['y']*_0x14e662+_0x2ab3c7;_0x23bac7?(_0x359804['x']===_0x100b25[_0x3832ca('0x3b')]['x']&&_0x359804['y']===_0x100b25['startNode']['y']?(_0x2ceb3e['fillStyle']=_0x3832ca('0x35'),_0x2ceb3e['fillRect'](_0xe4e66d+0x2,_0x52f811+0x2,_0x69d8fd-0x2,_0x14e662-0x2)):(_0x2ceb3e[_0x3832ca('0xe')]=_0x3832ca('0x22'),_0x2ceb3e[_0x3832ca('0x43')](_0xe4e66d+0x2,_0x52f811+0x2,_0x69d8fd-0x2,_0x14e662-0x2)),_0x2ceb3e[_0x3832ca('0xe')]=_0x4fbfd2,_0x2ceb3e[_0x3832ca('0x43')](_0xe4e66d+0xa,_0x52f811+0xa,_0x69d8fd-0x12,_0x14e662-0x12)):(_0x2ceb3e[_0x3832ca('0xe')]=_0x4fbfd2,_0x2ceb3e['fillRect'](_0xe4e66d+0x5,_0x52f811+0x5,_0x69d8fd-0x8,_0x14e662-0x8));}function renderMaze(_0x158b6b,_0x48169c){var _0x1220bc=_0x29e825,_0x14c3e7=_0x48169c[_0x1220bc('0x53')],_0x442804=0x258,_0x4d7fa9=0x258,_0x383ded=0xa,_0x3f0e93=0x2,_0x2131f6=(_0x442804-_0x383ded*0x2)/_0x48169c[_0x1220bc('0x14')];_0x2131f6=Math[_0x1220bc('0x33')](_0x2131f6,(_0x4d7fa9-_0x383ded*0x2)/_0x48169c[_0x1220bc('0x36')])>>0x0;var _0x5eb3fe=_0x383ded,_0x1eb3ee=_0x383ded,_0x5c6aa3=_0x2131f6,_0x3b92f2=_0x2131f6;canvas[_0x1220bc('0x14')]=_0x442804,canvas['height']=_0x4d7fa9,_0x158b6b[_0x1220bc('0xe')]=_0x1220bc('0x22'),_0x158b6b[_0x1220bc('0x43')](0x0,0x0,canvas[_0x1220bc('0x14')],canvas[_0x1220bc('0x36')]),_0x158b6b[_0x1220bc('0xe')]=_0x1220bc('0x2d'),_0x158b6b['strokeStyle']=_0x1220bc('0x2d'),_0x158b6b['font']=_0x1220bc('0x26'),_0x158b6b['lineWidth']=_0x3f0e93;var _0x5bb3a1=_0x1eb3ee,_0x5e841d=0x0;for(var _0x5cf734=0x0;_0x5cf734<_0x14c3e7['length'];_0x5cf734++){var _0x5ab2bb=_0x14c3e7[_0x5cf734];_0x3b92f2=_0x2131f6;for(var _0xdd86d2=0x0;_0xdd86d2<_0x5ab2bb['length'];_0xdd86d2++){var _0x2ec864=_0x5ab2bb[_0xdd86d2],_0x51c43f=_0xdd86d2*_0x5c6aa3+_0x5eb3fe,_0x41da00=_0x5bb3a1;if(!_0x2ec864[_0x1220bc('0x41')]){_0x158b6b[_0x1220bc('0x43')](_0x51c43f,_0x41da00,_0x5c6aa3,_0x3b92f2);continue;}if(_0x2ec864['x']===_0x48169c[_0x1220bc('0x3b')]['x']&&_0x2ec864['y']===_0x48169c[_0x1220bc('0x3b')]['y'])_0x158b6b[_0x1220bc('0xe')]=_0x1220bc('0x35'),_0x158b6b[_0x1220bc('0x43')](_0x51c43f+0x2,_0x41da00+0x2,_0x5c6aa3-0x2,_0x3b92f2-0x2),_0x158b6b[_0x1220bc('0xe')]=_0x1220bc('0x44'),_0x158b6b[_0x1220bc('0xd')]('S',_0x51c43f+0x1+_0x5c6aa3*0x1/0x3,_0x41da00+_0x3b92f2-0x9),_0x158b6b[_0x1220bc('0xe')]='#432D7D';else _0x2ec864['x']===_0x48169c[_0x1220bc('0x24')]['x']&&_0x2ec864['y']===_0x48169c[_0x1220bc('0x24')]['y']&&(_0x158b6b[_0x1220bc('0xe')]=_0x1220bc('0x1d'),_0x158b6b[_0x1220bc('0x43')](_0x51c43f+0x2,_0x41da00+0x2,_0x5c6aa3-0x2,_0x3b92f2-0x2),_0x158b6b[_0x1220bc('0xe')]=_0x1220bc('0x2d'),_0x158b6b[_0x1220bc('0xd')]('C',_0x51c43f+0x1+_0x5c6aa3*0x1/0x3,_0x41da00+_0x3b92f2-0x9));var _0x487c2d=(_0x2ec864[_0x1220bc('0x41')]&Maze[_0x1220bc('0x27')]['W'])!==Maze['Direction']['W'],_0x4b91ec=(_0x2ec864[_0x1220bc('0x41')]&Maze['Direction']['N'])!==Maze[_0x1220bc('0x27')]['N'];if(_0x487c2d&&_0x4b91ec)_0x158b6b[_0x1220bc('0x43')](_0x51c43f,_0x41da00,_0x3f0e93,_0x3b92f2),_0x158b6b['fillRect'](_0x51c43f,_0x41da00,_0x5c6aa3,_0x3f0e93);else{if(_0x487c2d)_0x158b6b[_0x1220bc('0x43')](_0x51c43f,_0x41da00,_0x3f0e93,_0x3b92f2);else{if(_0x4b91ec)_0x158b6b['fillRect'](_0x51c43f,_0x41da00,_0x5c6aa3,_0x3f0e93);else{var _0x565c33=![];_0x5cf734>0x0&&(_0x565c33=(_0x14c3e7[_0x5cf734-0x1][_0xdd86d2][_0x1220bc('0x41')]&Maze[_0x1220bc('0x27')]['W'])!==Maze[_0x1220bc('0x27')]['W']);_0x565c33&&_0xdd86d2>0x0&&(_0x565c33=(_0x14c3e7[_0x5cf734][_0xdd86d2-0x1][_0x1220bc('0x41')]&Maze[_0x1220bc('0x27')]['N'])!==Maze['Direction']['N']);var _0x4094cf=_0x565c33?0x1:0x0;_0x4094cf&&_0x158b6b[_0x1220bc('0x43')](_0x51c43f,_0x41da00,_0x3f0e93,_0x3f0e93);}}}}_0x5bb3a1+=_0x3b92f2,_0x5e841d+=_0x3b92f2;}_0x158b6b[_0x1220bc('0x43')](_0x5eb3fe,_0x5e841d+_0x1eb3ee,_0x5c6aa3*_0x48169c[_0x1220bc('0x14')],_0x3f0e93),_0x158b6b[_0x1220bc('0x43')](_0x5c6aa3*_0x48169c[_0x1220bc('0x14')]+_0x5eb3fe,_0x1eb3ee,_0x3f0e93,_0x5e841d+_0x3f0e93);}