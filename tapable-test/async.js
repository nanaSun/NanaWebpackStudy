const {
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook
 } = require("tapable");


 class Car {
	constructor() {
		this.hooks = {
            accelerate: new AsyncSeriesHook(["newSpeed"]),
            bail: new AsyncSeriesBailHook(["source", "target", "routesList"]),
            break: new AsyncParallelBailHook(["source", "target", "routesList"])
		};
	}
}
const myCar = new Car();
myCar.hooks.break.intercept({
	call: (source, target, routesList) => {
		console.log("Starting to calculate routes");
	},
	register: (tapInfo) => {
		// tapInfo = { type: "promise", name: "GoogleMapsPlugin", fn: ... }
		console.log(`${tapInfo.name} is doing it's job`);
		return tapInfo; // may return a new tapInfo object
    },
    loop:()=>{
        console.log("Starting to loop routes");
    }
})
//myCar.hooks.accelerate.tap("WarningLampPlugin", () => console.log("aaa"));
// myCar.hooks.break.tapPromise("calculateRoutes",  (newSpeed)  => new Promise((rs,rj)=>{
//     console.log(`Accelerating to 0 ${newSpeed}`);
//     rs(5);
// }));
// myCar.hooks.break.tap("calculateRoutes", (newSpeed) => {console.log(`Accelerating to 1 ${newSpeed}`);});


// myCar.hooks.break.tapPromise("calculateRoutes",  (newSpeed)  => new Promise((rs,rj)=>{
//     console.log(`Accelerating to 5 ${newSpeed}`);
//     setTimeout(function(){console.log(`Accelerating to 6 ${newSpeed}`);rs(11);},3000)
// }));

myCar.hooks.break.tapAsync("calculateRoutes", (newSpeed,callback) => {setTimeout(function(){console.log(`Accelerating to 3 ${newSpeed}`);},1000);callback(3);});


myCar.hooks.break.tapAsync("calculateRoutes", (newSpeed,callback) => {setTimeout(function(){console.log(`Accelerating to 1 ${newSpeed}`);},1000);callback(1); return 1;});

myCar.hooks.break.tapAsync("calculateRoutes", (newSpeed,callback) => {setTimeout(function(){console.log(`Accelerating to 2 ${newSpeed}`);},1000);callback(2)});

// myCar.hooks.break.callAsync("aa",err=>{
// 	console.log("aaa")
//     console.log(err);
// });
myCar.hooks.break.promise("aaaa",(err)=>{
	console.log(err)
});