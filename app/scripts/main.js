
    var config2 = liquidFillGaugeDefaultSettings();

    config2.circleColor = '0f8bca';
    config2.textColor = '#ffffff';
    config2.waveTextColor = '#174f80';
    config2.waveColor = '#0f8bca';
    config2.circleThickness = 0.1;
    config2.circleFillGap = 0.2;
    config2.textVertPosition = 0.8;
    config2.waveAnimateTime = 2000;
    config2.waveHeight = 0.3;
    config2.waveCount = 1;
    var gauge2= loadLiquidFillGauge('fillgauge2', 90, config2);


    var gauge3 = loadLiquidFillGauge('fillgauge3', 60, config2);
    var config3 = liquidFillGaugeDefaultSettings();
    config3.textVertPosition = 0.8;
    config3.waveAnimateTime = 5000;
    config3.waveHeight = 0.15;
    config3.waveAnimate = false;
    config3.waveOffset = 0.25;
    config3.valueCountUp = false;
    config3.displayPercent = false;

    var gauge4 = loadLiquidFillGauge('fillgauge4', 50, config2);
    var config4 = liquidFillGaugeDefaultSettings();
    config4.circleThickness = 0.15;
    config4.circleColor = '#808015';
    config4.textColor = '#555500';
    config4.waveTextColor = '#FFFFAA';
    config4.waveColor = '#AAAA39';
    config4.textVertPosition = 0.8;
    config4.waveAnimateTime = 1000;
    config4.waveHeight = 0.05;
    config4.waveAnimate = true;
    config4.waveRise = false;
    config4.waveHeightScaling = false;
    config4.waveOffset = 0.25;
    config4.textSize = 0.75;
    config4.waveCount = 3;
    var gauge5 = loadLiquidFillGauge('fillgauge5', 40, config2);
    var config5 = liquidFillGaugeDefaultSettings();
    config5.circleThickness = 0.4;
    config5.circleColor = '#6DA398';
    config5.textColor = '#0E5144';
    config5.waveTextColor = '#6DA398';
    config5.waveColor = '#246D5F';
    config5.textVertPosition = 0.52;
    config5.waveAnimateTime = 5000;
    config5.waveHeight = 0;
    config5.waveAnimate = false;
    config5.waveCount = 2;
    config5.waveOffset = 0.25;
    config5.textSize = 1.2;
    config5.minValue = 30;
    config5.maxValue = 150
    config5.displayPercent = false;
    var gauge6 = loadLiquidFillGauge('fillgauge6', 20, config2);

    function NewValue(){
        if(Math.random() > .5){
            return Math.round(Math.random()*100);
        } else {
            return (Math.random()*100).toFixed(1);
        }
    }