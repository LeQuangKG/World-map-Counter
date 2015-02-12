
function chkBrowser(){
var isiPad = navigator.userAgent.match(/iPad/i) != null;
	//if(!isiPad){
	  //  document.location.href='about:blank';
	    //return isiPad;
//	}else{
		document.getElementById('bg').style.visibility='visible';
		document.getElementById('countryCombox').style.visibility='visible';
		document.getElementById('Div5').style.visibility='visible';
		document.getElementById('comboxDate').style.visibility='visible';
		
		return true;
//	}
}

var myCountry = [
    ['France',0,0],
    ['Switzerland',0,0],
    ['Spain',0,0],
    ['Germany',0,0],
    ['United Kingdom',0,0],
    ['Norway',0,0],
    ['Finland',0,0],
    ['Poland',0,0],
    ['Ukraine',0,0],
    ['Russia',0,0],
    ['China',0,0],
    ['Kazakhstan',0,0],
    ['Mongolia',0,0],
    ['India',0,0],
    ['Japan',0,0],
    ['Korea, South',0,0],
    ['Vietnam',0,0],
    ['Australia',0,0],
    ['Indonesia',0,0],
    ['Saudi Arabia',0,0],
    ['Turkey',0,0],
    ['Iran',0,0],
    ['Afghanistan',0,0],
    ['Pakistan',0,0],
    ['United States',0,0],
    ['Canada',0,0],
    ['Greenland',0,0],
    ['Mexico',0,0],
    ['Brazil',0,0],
    ['Argentina',0,0],
    ['Peru',0,0],
    ['Bolivia',0,0],
    ['Venuzuela',0,0],
    ['Colombia',0,0],
    ['South Africa',0,0],
    ['Nigeria',0,0],
    ['Cote dIvoire',0,0],
    ['Mali',0,0],
    ['Niger',0,0],
    ['Chad',0,0],
    ['Mauritania',0,0],
    ['Ethiopia',0,0],
    ['Zambia',0,0],
    ['Angola',0,0],
    ['Congo',0,0],
    ['Sudan',0,0],
    ['Egypt',0,0],
    ['Libya',0,0],
    ['Algeria',0,0],
    ['Madagascar',0,0]
];



var v = [['Angola', 42.91, 23.40, 18993000],
['Mozambique', 39.62, 13.00, 22416881],
['Afghanistan', 37.83, 17.39, 29117000],
['South Africa', 19.48, 17.09, 49991300],
['Nigeria', 35.51, 16.06, 158259000],
['Russia', 11.05, 16.04, 142905200],
['Chad', 39.40, 15.47, 11506000],
['Lesotho', 26.93, 15.19, 2171000],
['Ukraine', 9.62, 15.74, 45778500],
['Guinea-Bissau', 35.15, 15.27, 1515000],
['Central African Republic', 36.46, 15.01, 4401000], 
['Somalia', 42.71, 14.87, 9359000],
['Swaziland', 26.63, 14.60, 1186000],
['Zimbabwe', 31.86, 13.58, 12644000],
['Mali', 45.62, 14.29, 14517176],
['Niger', 50.54, 14.11, 15203822],
['Bulgaria', 9.32, 14.32, 7351234],
['Serbia', 9.19, 13.85, 7306677], 
['Belarus', 9.76, 13.77, 9481100],
['Malawi', 40.85, 13.22, 15692000],
['Latvia', 9.96, 13.60, 2229500],
['Estonia', 10.45, 13.55, 1340122],
['Burkina Faso', 43.59, 12.74, 15730977],
['Namibia', 21.48, 12.95, 2283000],
['Gabon', 35.19, 13.00, 1505000],
['Zambia', 44.80, 12.61, 13046508],
['Hungary', 9.60, 12.68, 10014324],
['Tanzania', 32.64, 12.09, 43187823],
['Gambia, The', 34.19, 7.65, 1728000],
['Cameroon', 33.04, 11.83, 19406100],
['Sierra Leone', 38.46, 11.73, 5868000],
['Uganda', 47.49, 11.71, 31800000],
['Croatia', 9.60, 11.91, 4425747],
['Romania', 9.55, 11.81, 21466174],
['Congo, Republic of the', 40.55, 11.49, 67827000],
['Sudan', 36.12, 11.00, 43192000],
['Congo, Democratic Republic of the', 37.74, 11.06, 4043000],
['Ethiopia', 42.99, 11.04, 79455634],
['Lithuania', 9.29, 11.33, 3249400],
['Germany', 8.30, 10.92, 81802000],
['Liberia', 37.25, 10.62, 3994000],
['Italy', 9.18, 9.84, 60605053], 
['Czech Republic', 8.70, 10.86, 10515818],
['Moldova', 11.16, 10.74, 3563800],
['Portugal', 9.94, 10.80, 10636888],
['Slovenia', 8.85, 10.87, 2046540],
['Guinea', 36.90, 10.45, 10324000],
['Greece', 9.21, 10.70, 11306183],
['Korea, North', 14.51, 9.08, 23991000],
['Belgium', 10.06, 10.57, 10827519],
['Cote dIvoire', 30.95, 10.16, 21571000],
['Sweden', 10.18, 10.20, 9422661],
['Denmark', 10.29, 10.19, 5560628],
['Rwanda', 36.74, 9.88, 10412820],
['Finland', 10.37, 10.24, 5383180],
['Poland', 10.01, 10.17, 38092000],
['Austria', 8.67, 10.14, 8396760],
['Burundi', 41.01, 9.61, 8519000],
['Isle of Man', 11.42, 9.92, 83000],
['Japan', 7.31, 10.09, 127960000],
['Georgia', 10.73, 9.92, 4436400],
['Slovakia', 10.48, 9.60, 5435273],
['Senegal', 36.73, 9.26, 12861000],
['Kazakhstan', 16.65, 9.38, 16473000],
['Tuvalu', 23.24, 9.20, 10000],
['United Kingdom', 12.29, 9.33, 62008048],
['Equatorial Guinea', 35.43, 9.03, 700000],
['Kenya', 33.54, 8.93, 38610097],
['Norway', 10.84, 9.24, 4937400],
['Benin', 38.11, 9.00, 8778646],
['Western Sahara', 32.10, 8.96, 531000],
['Uruguay', 13.52, 9.58, 3356584],
['Botswana', 22.31, 10.57, 1800098],
['Mauritania', 33.23, 8.83, 3460000],
['Ghana', 27.55, 8.75, 24233431],
['Macedonia', 11.87, 8.91, 2052722],
['Netherlands', 10.23, 8.85, 16666500],
['Montenegro', 11.00, 8.89, 641966],
['Spain', 10.66, 8.80, 46148605],
['Bosnia and Herzegovina', 8.89, 8.80, 3843126],
['Faroe Islands', 12.95, 8.67, 48585],
['France', 12.29, 8.76, 65821885],
['Switzerland', 9.53, 8.72, 7866500],
['Malta', 10.35, 8.60, 416333],
['Luxembourg', 11.69, 8.48, 502100],
['Sao Tome and Principe', 38.03, 8.18, 165000],
['Armenia', 12.85, 8.46, 3254300],
['Saint Pierre and Miquelon', 8.32, 8.83, 5888],
['Barbados', 12.35, 8.39, 273000],
['United States', 13.83, 8.38, 311290000],
/*['World', 19.15, 8.12],*/
['Djibouti', 25.27, 8.23, 889000],
['Guernsey', 10.13, 8.44, 62274],
['Azerbaijan', 17.85, 8.25, 8997400],
['Laos', 26.13, 8.13, 6230200],
['Eritrea', 32.80, 8.08, 5254000],
['Burma', 19.31, 8.16, 50496000],
['Haiti', 24.40, 8.21, 10085214],
['Trinidad and Tobago', 14.35, 8.29, 1317714],
['Cambodia', 25.40, 8.07, 13395682],
['Gibraltar', 14.23, 8.18, 29000],
['Togo', 35.58, 7.96, 6028000],
['Dominica', 15.62, 8.06, 68000],
['Greenland', 14.60, 8.12, 56452],
['Monaco', 6.94, 8.28, 35000],
['Curacao', 8.00, 8.00, 14218],
['Madagascar', 37.51, 7.79, 20146000],
['Grenada', 17.01, 7.94, 104000],
['Canada', 10.28, 7.98, 34441000],
['Montserrat', 11.67, 7.20, 6000],
['Puerto Rico', 11.35, 7.95, 3725789],
['Palau', 10.74, 7.87, 20000],
['Aruba', 12.78, 7.84, 107000],
['San Marino', 9.02, 7.89, 31887],
['India', 20.97, 7.48, 1210193422],
['Jersey', 10.90, 7.52, 92500],
['Liechtenstein', 9.65, 7.61, 36157],
['Vanuatu', 20.86, 7.43, 240000],
['Kiribati', 22.73, 7.40, 100000],
['Bermuda', 11.42, 7.57, 64566],
['Comoros', 34.19, 7.23, 735000],
['Argentina', 17.54, 7.38, 40091359],
['Cuba', 9.99, 7.47, 11241161],
['Bhutan', 19.13, 7.12, 695822],
['Guyana', 17.12, 7.20, 784894],
['Yemen', 33.49, 7.02, 22492035],
['Cook Islands', 15.37, 7.37, 23400],
['Saint Kitts and Nevis', 14.07, 7.10, 52000],
['New Zealand', 13.68, 7.15, 4410700],
['Pakistan', 24.81, 6.92, 187342721],
/*['Mayotte', 7.05],*/
['Virgin Islands', 11.41, 7.17, 109000],
['Bolivia', 24.71, 6.85, 10426154],
['Saint Vincent and the Grenadines', 14.62, 6.98, 109000],
['SeyChelles', 15.33, 6.91, 86525],
['Hong Kong', 7.49, 7.07, 7061200],
['Saint Helena, Ascension, and Tristan da Cunha', 10.65, 6.88, 4000],
['Iceland', 13.29, 6.96, 318452],
['Saint lucia', 14.63, 7.00, 166526],
['Bahamas, The', 16.10, 6.88, 399000],
['Nepal', 22.17, 6.81, 28584975],
['China', 12.29, 7.03, 1339724852],
['Taiwan', 8.90, 7.00, 23165878],
['Kyrgyzstan', 23.66, 6.79, 5418300],
['Australia', 12.33, 6.88, 22601037],
['Tajikistan', 26.29, 6.60, 7075000],
['Mauritius', 13.97, 6.68, 1280925],
['Papua New Guinea', 26.44, 6.58, 6703000],
['Jamaica', 19.20, 6.54, 2741000],
['Thailand', 12.95, 7.29, 67041000],
['Lebanon', 15.02, 6.54, 4228000],
['Cyprus', 11.41, 6.45, 1104000],
['Cape Verde', 21.47, 6.34, 491575],
['Brazil', 17.79, 6.36, 190732694],
['Ireland', 16.10, 6.34, 4470700],
['Turkmenistan', 19.54, 6.24, 5042000],
['Indonesia', 18.10, 6.26, 237556363], 
['Andorra', 9.66, 6.35, 84082],
['Sri Lanka', 17.42, 5.92, 20410000],
['Korea, South', 6.15, 6.26, 48988833],
['Nauru', 27.78, 6.11, 10000],
['Peru', 19.41, 5.93, 29461933],
['Turkey', 17.93, 6.10, 73722988],
['Mongolia', 20.93, 6.04, 2802800],
['Albania', 12.15, 6.15, 3195000],
['Vietnam', 17.07, 5.96, 87375000],
['Iran', 18.55, 5.94, 75266000],
['Timor-Leste', 25.70, 5.89, 1124000],
['Chile', 14.33, 5.97, 17225100],
['Fiji', 21.11, 5.90, 861000],
['Belize', 26.43, 5.87, 333200],
['Bangladesh', 22.98, 5.75, 50499000],
['Antigua and Barbuda', 16.31, 5.73, 89000],
['El Salvador', 17.75, 5.62, 6193000],
['Suriname', 16.42, 5.54, 525000],
['Israel', 19.24, 5.47, 7718600],
['Samoa', 22.50, 5.34, 187032],
['Uzbekistan', 17.43, 5.29, 27794000],
['Colombia', 17.49, 5.26, 45965000],
['Tunisia', 17.40, 5.83, 10549100],
['New Caledonia', 16.28, 5.28, 256275],
['Venezuela', 20.10, 5.17, 29206000],
['Philippines', 25.34, 5.02, 94013200],
['Guatemala', 26.96, 4.98, 14361666],
['Cayman Islands', 12.24, 5.10, 54878],
['Ecuador', 19.96, 5.00, 14306876],
['Honduras', 25.14, 5.02, 8215313],
['Tonga', 25.27, 4.90, 104000],
['Iraq', 28.81, 4.82, 31467000],
['Malaysia', 21.08, 4.93, 27565821],
['Egypt', 24.63, 4.82, 80182000],
['Mexico', 19.13, 4.86, 112336538],
['French Polynesia', 15.53, 4.87, 294935],
['Singapore', 8.50, 4.95, 5076700],
['Morocco', 19.19, 4.75, 32137000],
['Algeria', 16.69, 4.69, 36300000],
['Panama', 19.43, 4.65, 3405813],
['Wallis and Futuna', 13.96, 4.68, 15398],
['Paraguay', 17.48, 4.57, 6230000],
['Marshall Islands', 29.11, 4.38, 54305],
['British Virgin Islands', 14.50, 4.49, 28213],
['Anguilla', 12.92, 4.44, 15236],
['Micronesia, Federated States of', 22.22, 4.35, 102624],
['Bahrain', 14.64 , 2.61, 1262000],
['Dominican Republic', 19.67, 4.35, 9378818],
['Costa Rica', 16.54, 4.33, 4563538],
['Nicaragua', 19.46, 5.03, 5788000],
['Turks and Caicos Islands', 17.76, 2.99, 40357],
['American Samoa', 22.84, 4.10, 68000],
['Solomon Islands', 28.03, 3.93, 530669],
['Syria', 23.99, 3.68, 21040000],
['Maldives', 14.83, 3.71, 317280],
['West Bank', 24.56, 3.58, 2568555],
['Macau', 9.03, 3.72, 542200],
['Oman', 24.15, 3.45, 2694094],
['Libya', 24.04, 3.40, 6355000],
['Gaza Strip', 35.30, 3.29, 1657155],
['Saudi Arabia', 19.34, 3.33, 27136977],
['Brunei', 17.87, 3.35, 399000],
['Northern Mariana Islands', 20.69, 3.28, 61000],
['Sint Maarten', 3.00, 3.00, 37429],
['Jordan', 26.79, 2.69, 6187000],
['Qatar', 15.48 , 2.43, 1696563],
['Kuwait', 21.32, 2.11, 2737000],
['United Arab Emirates', 15.87, 2.06, 8264070]];

/*Global parameter*/
var totalP = 0;
var result =0;
var resultTotalP = 0;
var totalPeopleCurrent = 0;
var resultDeal = 0;
var resultDisplay = 0;
var inter ;
var tempResult =0;
var tempDeal = 0;
var step = 1;
var firstStepB = 1;
var stepDeal = 1;
var index = 0;
var firstStepD = 1;
var nextStepBirth = 1;
var nextStepDeal = 1;
var second = 0;
var Minute = 0;
var Hour = 0;
var animObjectList=[];
var bw=[];
var isRepositionned=false;
var totalSeconcod = 0;
var _peopeleB = 0;
var _peopleW = 0;
var tempResultB = 0;
var tempResultD = 0;

/*------------------------------*/

function AppStart()
{
	if(chkBrowser()){
		if(isRepositionned){
			document.getElementById('bg').style.visibility="visible";
			repositionDiv();
			initCanvas();
		}
		inter = setInterval(AutoRef,1000);
	}
}
function AutoRef()
{
    totalSeconcod+=1;
    if  (second == 59)
    {
        //check minute if minute  = 59 then add hour
        if(Minute == 59)
        {
            Minute = 0;
            Hour += 1;
            if(Hour == 23)
            {
                Hour = 0;
            }
        }else{
            Minute+=1;
        }
        
        second = 0;
    }else{
        second += 1;
    }
    
    if (second<10)
        document.getElementById('timeEllapsed').innerHTML = Minute + ":0" + second ;
    else
        document.getElementById('timeEllapsed').innerHTML = Minute + ":" + second ;
    
    if  (tempResult>=step)
    {        
        document.getElementById('birthDiv').innerHTML = addCommas(addDigit(Math.round(tempResult)));        
        /*var temp = (resultTotalP + Math.round(tempResult) - Math.round(tempDeal));*/
        var temp = resultTotalP + firstStepB;
        resultTotalP = temp;
        if(index==0)
        {
            totalPeopleCurrent = totalPeopleCurrent + firstStepB;
            resultTotalP = totalPeopleCurrent;
        }else{            
            /*v[index][3] = v[index][3] + firstStepB;*/
            /*resultTotalP = v[index][3];*/
        }
        
        document.getElementById('TotalPopulation').innerHTML = addCommas(temp);
        step += nextStepBirth;        
    }else{
        tempResult+=result;
    }
    
    if  (tempDeal>=stepDeal)
    {
        document.getElementById('deathDiv').innerHTML = addCommas(addDigit(Math.round(tempDeal)));
        /*var temp = (resultTotalP + Math.round(tempResult) - Math.round(tempDeal));        */
        var temp = (resultTotalP - firstStepD);
        resultTotalP = temp;
        if(index==0)
        {
            totalPeopleCurrent = totalPeopleCurrent - firstStepD;
            resultTotalP = totalPeopleCurrent;
        }else{
            /*v[index][3] = v[index][3] - firstStepD;            */
            /*resultTotalP = v[index][3] ;            */
        }
        
        document.getElementById('TotalPopulation').innerHTML = addCommas(temp);
        stepDeal += nextStepDeal;
    }else{
        tempDeal+=resultDeal;
    }
    
    for(var _c=0; _c<myCountry.length; _c++){
        calcByCountry(_c,myCountry[_c][0]);
    }
    
}

function calBirth() {
    clearInterval(inter);
    document.getElementById('birthDiv').innerHTML = addCommas(addDigit(0))
    document.getElementById('deathDiv').innerHTML = addCommas(addDigit(0));
    result = 0;
    resultDisplay = 0;
    step=1;
    stepDeal=1;
    firstStepB = 1;
    firstStepD = 1;
    nextStepBirth = 1;
    nextStepDeal = 1;
    totalP =0;
    resultTotalP = 0;
    
    //second = 0;
    var cboCountry = document.getElementById("cboCountry");
    var country = cboCountry[cboCountry.selectedIndex].value;
    if(country=="World")
    {
        for(var i=0;i < v.length;i++)
        {
            totalP=v[i][3];            
            resultTotalP += totalP;
            result += ((totalP/1000) * v[i][1])/31536000;
            resultDeal +=((totalP/1000) * v[i][2])/31536000;
            tempResult = result;
            tempDeal = resultDeal;               
        }
        _peopleW = tempResult - tempDeal;
        index = 0;
        if(resultTotalP>totalPeopleCurrent)
        {
            totalPeopleCurrent = resultTotalP + Math.round(_peopleW * totalSeconcod);
        }else{
            totalPeopleCurrent = resultTotalP + Math.round(_peopleW * totalSeconcod);
        }
        
        if(step<result)
        {
            step = Math.round(result);
            firstStepB = step;
            nextStepBirth = step;
        }            
            
        if(stepDeal < resultDeal)
        {            
            stepDeal = Math.round(resultDeal);
            firstStepD = stepDeal;
            nextStepDeal= stepDeal;
        }
        
        document.getElementById('TotalPopulation').innerHTML = addCommas(totalPeopleCurrent);
        AppStart();
        
    }else
    {
        for (var i = 0; i < v.length; i++) {
            if (v[i][0] == country)
            {
                totalP = v[i][3];
                index = i;
                
                resultTotalP = totalP;
                if(totalP>totalPeopleCurrent)
                {
                    totalPeopleCurrent = totalP;
                }
                result = ((totalP/1000) * v[i][1])/31536000;
                resultDeal = ((totalP/1000)* v[i][2])/31536000;
                tempResult = result;
                tempDeal = resultDeal;
                _peopeleB = tempResult - tempDeal;
                resultTotalP = totalP + Math.round(_peopeleB * totalSeconcod)
                document.getElementById('TotalPopulation').innerHTML = addCommas(totalP + Math.round(_peopeleB*totalSeconcod));
                
                tempResultB = Math.round(tempResult * totalSeconcod);
                
                tempResultD = Math.round(tempDeal * totalSeconcod);
                
                document.getElementById('birthDiv').innerHTML = addCommas(addDigit(tempResultB))
                document.getElementById('deathDiv').innerHTML = addCommas(addDigit(tempResultD));
                
                if(step<result)
                {
                    step = Math.round(result);
                    firstStepB = step;
                }
            
                if(stepDeal < resultDeal)
                {
                    stepDeal = Math.round(resultDeal);
                    firstStepD = stepDeal;
                }
                
                AppStart();
                break;
            }
        }
    }    
}

function calNexTimeTotalPeople()
{    
    if(v.length > 0)
    {
        var totalPeople = 0;
        var totalBirth = 0;
        var totalDeal = 0;
        var cboNextPeople = document.getElementById('cboTotalPeople');
        var nextPeople = cboNextPeople[cboNextPeople.selectedIndex].value;
        for(var i=0;i<v.length;i++)
        {
            totalPeople += v[i][3];
            totalBirth += ((v[i][3]/1000) * v[i][1])/31536000;
            totalDeal += ((v[i][3]/1000) * v[i][2])/31536000;
        }
        
        var temp = nextPeople - totalPeople;
        var totalPeopleIncre = Math.round(totalBirth - totalDeal);
        
        var totalSecond = Math.round(temp / totalPeopleIncre);
        
        var time = new Date();
        var timeCurrent = new Date();
        var temp = timeCurrent.getTime();
        time.setTime(temp + totalSecond * 1000);
        
        var stringDisplay = time.getFullYear();
        
        document.getElementById('yearDiv').innerHTML = stringDisplay;
    }
}

function calTotalPeopleNextTime()
{
    if(v.length>0)
    {
        var totalPeople = 0;
        var totalBirth = 0;
        var totalDeal = 0;
        var cboYear  = document.getElementById('cboYear');
        var txtTimeFuture = cboYear[cboYear.selectedIndex].value;
        var timeFuture = new Date(txtTimeFuture,01,01,00,00,00,00);
        if(!isNaN(timeFuture))
        {
            for(var i=0;i<v.length;i++)
            {
                totalPeople += v[i][3];
                totalBirth += ((v[i][3]/1000) * v[i][1])/31536000;
                totalDeal += ((v[i][3]/1000) * v[i][2])/31536000;
            }
        
            var temp = timeFuture.getTime();
            var tempTimeCurrent = new Date();
            var tempCurrent = tempTimeCurrent.getTime();
            if(temp>tempCurrent)
            {
                var tempResult = temp - tempCurrent;
                var testTime = new Date(tempResult);
                
                totalPeople = totalPeople + ((totalBirth - totalDeal)* (tempResult/1000));
                document.getElementById('populationDiv').innerHTML = addCommas(Math.round(totalPeople));
            }else{
                alert("time error");   
            }            
        }else   
        {
            alert("time error");
        }
    }
}
function calcByCountry(listID,country){
    for (var _i=0;_i<v.length;_i++){
       if(v[_i][0]==country){
            
            var birthRate = v[_i][1];
            var deathRate = v[_i][2];
            
            var numberBirth = ((v[_i][3]/1000) * birthRate)/31536000;
            var numberDeath = ((v[_i][3]/1000)* deathRate)/31536000;
            
            myCountry[listID][1] += numberBirth;
            myCountry[listID][2] += numberDeath;
            
            if (Math.round(myCountry[listID][1]) >= 1){
            	bw[listID][0].Show();            
                myCountry[listID][1] = 0;
	    }
            if(Math.round(myCountry[listID][2]) >= 1){
		bw[listID][1].Show();            
                myCountry[listID][2] = 0;
            }
            return;
       }
    }
}
function repositionDiv(){
	for(var _y=0;_y<myCountry.length;_y++){
			var objDiv = document.getElementById(myCountry[_y][0]);
			objDiv.style.top = (parseInt(objDiv.style.top)-15)+'px';
			objDiv.style.left = (parseInt(objDiv.style.left)-10)+'px';;
	}
	isRepositionned=true;
}
function initCanvas(){

	for (var _i=0;_i<myCountry.length;_i++)
	{
	        var selectedDiv = document.getElementById(myCountry[_i][0]);
		    var childDiv =  selectedDiv.childNodes;
			
			var circ = new CircleIcon(150,10,50,50,childDiv[2]);
			var circ1 = new CircleIcon(150,10,50,50,childDiv[1]);
				circ1.StartColor=0;
				circ1.StopColor=0;
				circ1.CenterColor='rgba(0,0,0,1)';	

			bw[_i]=[circ,circ1];

	}
}
function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function addDigit(nStr)
{
    nStr+='';
    while(nStr.length < 9)
    {
        nStr = "0"+nStr;
    }    
    return nStr;
}