gdjs.Modulo_323Code = {};
gdjs.Modulo_323Code.localVariables = [];
gdjs.Modulo_323Code.idToCallbackMap = new Map();
gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1= [];
gdjs.Modulo_323Code.GDTextBoxBackgroundObjects2= [];
gdjs.Modulo_323Code.GDNextButtonObjects1= [];
gdjs.Modulo_323Code.GDNextButtonObjects2= [];
gdjs.Modulo_323Code.GDTextBoxBackground2Objects1= [];
gdjs.Modulo_323Code.GDTextBoxBackground2Objects2= [];
gdjs.Modulo_323Code.GDFood1Objects1= [];
gdjs.Modulo_323Code.GDFood1Objects2= [];
gdjs.Modulo_323Code.GDFood2Objects1= [];
gdjs.Modulo_323Code.GDFood2Objects2= [];
gdjs.Modulo_323Code.GDFood3Objects1= [];
gdjs.Modulo_323Code.GDFood3Objects2= [];
gdjs.Modulo_323Code.GDMovimentoObjects1= [];
gdjs.Modulo_323Code.GDMovimentoObjects2= [];
gdjs.Modulo_323Code.GDNewBBTextObjects1= [];
gdjs.Modulo_323Code.GDNewBBTextObjects2= [];
gdjs.Modulo_323Code.GDNewBBText2Objects1= [];
gdjs.Modulo_323Code.GDNewBBText2Objects2= [];
gdjs.Modulo_323Code.GDBussolaObjects1= [];
gdjs.Modulo_323Code.GDBussolaObjects2= [];
gdjs.Modulo_323Code.GDDirezioneObjects1= [];
gdjs.Modulo_323Code.GDDirezioneObjects2= [];
gdjs.Modulo_323Code.GDMappaObjects1= [];
gdjs.Modulo_323Code.GDMappaObjects2= [];
gdjs.Modulo_323Code.GDHealthObjects1= [];
gdjs.Modulo_323Code.GDHealthObjects2= [];
gdjs.Modulo_323Code.GDWeightsObjects1= [];
gdjs.Modulo_323Code.GDWeightsObjects2= [];


gdjs.Modulo_323Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bussola"), gdjs.Modulo_323Code.GDBussolaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Direzione"), gdjs.Modulo_323Code.GDDirezioneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Food1"), gdjs.Modulo_323Code.GDFood1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Food2"), gdjs.Modulo_323Code.GDFood2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Food3"), gdjs.Modulo_323Code.GDFood3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.Modulo_323Code.GDHealthObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mappa"), gdjs.Modulo_323Code.GDMappaObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewBBText2"), gdjs.Modulo_323Code.GDNewBBText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_323Code.GDNextButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_323Code.GDTextBoxBackground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Weights"), gdjs.Modulo_323Code.GDWeightsObjects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNextButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowNextButtonTimer");
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDTextBoxBackground2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDTextBoxBackground2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDNewBBText2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNewBBText2Objects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowTextBox2Timer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowMovimentoTimer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowImmaginiTimer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowFood1Timer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowFood2Timer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowFood3Timer");
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDFood1Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDFood1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDFood2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDFood2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDFood3Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDFood3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDDirezioneObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDDirezioneObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDBussolaObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDBussolaObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDMappaObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDMappaObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDHealthObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDHealthObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDWeightsObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDWeightsObjects1[i].hide();
}
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 640, "", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 640, "TextOverlay", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 640, "UI", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 360, "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 360, "TextOverlay", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 360, "UI", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowMovimentoTimer") >= 1.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bussola"), gdjs.Modulo_323Code.GDBussolaObjects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDBussolaObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDBussolaObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowMovimentoTimer") >= 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mappa"), gdjs.Modulo_323Code.GDMappaObjects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDMappaObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDMappaObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowImmaginiTimer") >= 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.Modulo_323Code.GDHealthObjects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDHealthObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDHealthObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowImmaginiTimer") >= 3.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Weights"), gdjs.Modulo_323Code.GDWeightsObjects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDWeightsObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDWeightsObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowTextBox2Timer") >= 6;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewBBText2"), gdjs.Modulo_323Code.GDNewBBText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_323Code.GDTextBoxBackground2Objects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDTextBoxBackground2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDTextBoxBackground2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDNewBBText2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNewBBText2Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowFood1Timer") >= 7;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Food3"), gdjs.Modulo_323Code.GDFood3Objects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDFood3Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDFood3Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowFood1Timer") >= 7.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Food2"), gdjs.Modulo_323Code.GDFood2Objects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDFood2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDFood2Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowFood1Timer") >= 8;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Food1"), gdjs.Modulo_323Code.GDFood1Objects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDFood1Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDFood1Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowFood3Timer") >= 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Direzione"), gdjs.Modulo_323Code.GDDirezioneObjects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDDirezioneObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDDirezioneObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowNextButtonTimer") >= 15;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_323Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNextButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_323Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_323Code.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_323Code.GDNextButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_323Code.GDNextButtonObjects1[k] = gdjs.Modulo_323Code.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.Modulo_323Code.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Modulo 4", false);
}
}

}


};

gdjs.Modulo_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_323Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_323Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackground2Objects1.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackground2Objects2.length = 0;
gdjs.Modulo_323Code.GDFood1Objects1.length = 0;
gdjs.Modulo_323Code.GDFood1Objects2.length = 0;
gdjs.Modulo_323Code.GDFood2Objects1.length = 0;
gdjs.Modulo_323Code.GDFood2Objects2.length = 0;
gdjs.Modulo_323Code.GDFood3Objects1.length = 0;
gdjs.Modulo_323Code.GDFood3Objects2.length = 0;
gdjs.Modulo_323Code.GDMovimentoObjects1.length = 0;
gdjs.Modulo_323Code.GDMovimentoObjects2.length = 0;
gdjs.Modulo_323Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_323Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_323Code.GDNewBBText2Objects1.length = 0;
gdjs.Modulo_323Code.GDNewBBText2Objects2.length = 0;
gdjs.Modulo_323Code.GDBussolaObjects1.length = 0;
gdjs.Modulo_323Code.GDBussolaObjects2.length = 0;
gdjs.Modulo_323Code.GDDirezioneObjects1.length = 0;
gdjs.Modulo_323Code.GDDirezioneObjects2.length = 0;
gdjs.Modulo_323Code.GDMappaObjects1.length = 0;
gdjs.Modulo_323Code.GDMappaObjects2.length = 0;
gdjs.Modulo_323Code.GDHealthObjects1.length = 0;
gdjs.Modulo_323Code.GDHealthObjects2.length = 0;
gdjs.Modulo_323Code.GDWeightsObjects1.length = 0;
gdjs.Modulo_323Code.GDWeightsObjects2.length = 0;

gdjs.Modulo_323Code.eventsList0(runtimeScene);
gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_323Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_323Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackground2Objects1.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackground2Objects2.length = 0;
gdjs.Modulo_323Code.GDFood1Objects1.length = 0;
gdjs.Modulo_323Code.GDFood1Objects2.length = 0;
gdjs.Modulo_323Code.GDFood2Objects1.length = 0;
gdjs.Modulo_323Code.GDFood2Objects2.length = 0;
gdjs.Modulo_323Code.GDFood3Objects1.length = 0;
gdjs.Modulo_323Code.GDFood3Objects2.length = 0;
gdjs.Modulo_323Code.GDMovimentoObjects1.length = 0;
gdjs.Modulo_323Code.GDMovimentoObjects2.length = 0;
gdjs.Modulo_323Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_323Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_323Code.GDNewBBText2Objects1.length = 0;
gdjs.Modulo_323Code.GDNewBBText2Objects2.length = 0;
gdjs.Modulo_323Code.GDBussolaObjects1.length = 0;
gdjs.Modulo_323Code.GDBussolaObjects2.length = 0;
gdjs.Modulo_323Code.GDDirezioneObjects1.length = 0;
gdjs.Modulo_323Code.GDDirezioneObjects2.length = 0;
gdjs.Modulo_323Code.GDMappaObjects1.length = 0;
gdjs.Modulo_323Code.GDMappaObjects2.length = 0;
gdjs.Modulo_323Code.GDHealthObjects1.length = 0;
gdjs.Modulo_323Code.GDHealthObjects2.length = 0;
gdjs.Modulo_323Code.GDWeightsObjects1.length = 0;
gdjs.Modulo_323Code.GDWeightsObjects2.length = 0;


return;

}

gdjs['Modulo_323Code'] = gdjs.Modulo_323Code;
