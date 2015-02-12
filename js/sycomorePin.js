function CircleIcon(delay,frameNum,width,height,content)
{
    var my=this;
    this.UIInstance=null;
    this.delay=delay;
    this.isStop=true;
    this.width=width;
    this.height=height;
    this.frameNum=frameNum;
    this.frame=[];
    this.frameColor=[];
    this.index=0;
    this.content=content;
    this.R=0;
    
    this.StartColor=255;
    this.StopColor=255;
    //center circle fill color
    this.CenterColor='rgba(255,255,255,1)';//'White';
    
    this.Show=function()
    {
        my.UIInstance.style.visibility='visible';
        my.isStop=false;
        my.index=0;
        my.CalculateFrame();
        my.RunAni();
    }//end function
    
    this.Hide=function()
    {
        my.UIInstance.style.visibility='hidden';
        my.isStop=true;
        
    }//end function
    
    
    this.IniIcon=function()
    {
        var canvas=document.createElement('canvas');
        canvas.width=my.width;
        canvas.height=my.height;
        my.UIInstance=canvas;
        my.content.appendChild(canvas);
    }//end constructor
    
    
    this.RunAni=function()
    {
        if(my.isStop==true)
        {
            my.Hide();
            return;
        }
        
        var paint=my.UIInstance.getContext('2d');
        paint.clearRect(0,0,my.width,my.height);
        
        var flag=false;
        my.DrawCircleCenter();
        if(my.index<my.frameNum)
        {
            my.DrawCircle(my.index);
            flag=true;
        }
        //else
        //{
        //    my.DrawCircle(my.frameNum-1);
        //}
        //if(my.index>1)
        //{
        //    my.DrawCircle(my.index-2);
        //}
        if(my.index>5)
        {
            if(my.index-6<my.frameNum)
            {
                my.DrawCircle(my.index-6);
                flag=true;
            }
            else
            {
                flag=false;
            }
        }
        
        if(flag==false)
        {
            my.Hide();
            return;
        }
        
        my.index++;
        setTimeout(my.RunAni,my.delay);
    }//end function
    
    this.DrawCircle=function(index)
    {
        var paint=my.UIInstance.getContext('2d');
        
        
        var x=my.width/2;
        var y=my.height/2;
        
        var gradColor= paint.createRadialGradient(x,y,0,x,y,my.frame[index]);
        gradColor.addColorStop(0,'rgba('+my.StartColor+','+my.StartColor+','+my.StartColor+',0)');
        gradColor.addColorStop(0,'rgba('+my.StopColor+','+my.StopColor+','+my.StopColor+','+my.frameColor[index]+')');
        
        
        paint.fillStyle=gradColor;
        paint.beginPath();
        paint.arc(x,y,my.frame[index],0,2*Math.PI,true);
        paint.fill();
    }
    
    this.DrawCircleCenter=function(index)
    {
        var paint=my.UIInstance.getContext('2d');
        
        var x=my.width/2;
        var y=my.height/2;
        
        paint.fillStyle=my.CenterColor;
        paint.beginPath();
        paint.arc(x,y,my.R/10,0,2*Math.PI,true);
        paint.fill();
    }
    
    this.CalculateFrame=function()
    {
        var r;
        if(my.width>my.height)
        {
            r=my.height/2;
        }
        else
        {
            r=my.width/2;
        }
        my.R=r;
        my.frame=[];
        my.frameColor=[];
        var num=0.2;
        for(var i=0;i<my.frameNum;i++)
        {
            var rN=Math.round(r*(i+1)/my.frameNum);
            my.frame.push(rN);
            
            my.frameColor.push(num);
            num-=0.2/my.frameNum;
        }
    }//end function
    //call constructor
    my.IniIcon();
}