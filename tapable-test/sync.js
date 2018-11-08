const {
	SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	AsyncParallelHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook
 } = require("tapable");

/**
 * 每次起床之后，上班之前我们需要做些什么事情，我们创建一个类
 * 用于管理我们每次起床的任务
 */
class GetUp {
	constructor() {
		this.hooks = {
			cleanUp:new SyncHook(),
			charge:new SyncHook(),
			getOut:new SyncHook()
		};
	}
	prepare(){
		
		this.hooks.cleanUp.tap("brushYourTeeth",()=>{
			console.log("My teeth is ready!")
		})
		this.hooks.cleanUp.tap("putOnClothes",()=>{
			console.log("My clothes is ready!")
			this.hooks.getOut.tap("goToBusstop",()=>{
				console.log("My body is ready now!Go out!")
			})
		})
		this.hooks.charge.tap("haveBreakfast",()=>{
			console.log("I'm satisefied now~")
		})
		
	}
	start(){
		this.hooks.cleanUp.call();
		this.hooks.charge.call();
		this.hooks.getOut.call();
	}
}
/**
 * 到了公司之后，下班之前，我们需要做的事情创建一个类
 * 用于管理我们每天我们在公司的任务
 */
class WorkTask {
	constructor() {
		this.hooks = {
			prepare:new SyncHook(),
			working:new AsyncSeriesHook()
		};
	}
	prepare(){
		
		this.hooks.prepare.tap("makeCoffee",()=>{
			console.log("Coffee is ready!")
		})
		this.hooks.prepare.tap("turnOnComputer",()=>{
			console.log("Computer is ready!")
		})
		this.hooks.working.tapAsync("powerpoint",(next)=>{
			setTimeout(()=>{
				console.log("powerpoint is making")
				next();
			},3000)
		})
		this.hooks.working.tapAsync("haveameeting",()=>{
			console.log("meeting is going")
		})
	}
	start(){
		this.hooks.prepare.call();
		this.hooks.working.callAsync();
	}
}
/**
 * 下班班之后，我们的娱乐活动创建一个类
 * 用于管理我们每天下班后的娱乐活动
 */
class Activity {
	constructor() {
		this.hooks = {
		};
	}
	start(){

	}
}
/**
 * 新建一个名为我的日常的类，然后里面放入3个时间段，就是上班前上班中和下班后。
 * 我们要做的就是整理出，这三个时间段我们需要做些什么。
 * 然后将这个三个时间段变为一个可以挂钩子的对象，同时声明此钩子提供的参数。
 * 工作前需要提供的参数
 *  */
class MyDaily {
	constructor() {
		this.getUp=new GetUp();
		this.workTask=new WorkTask();
		this.activity=new Activity();
		this.hooks = {
			beforeWork: new SyncHook(["getUp"]),
            atWork: new SyncWaterfallHook(["workTask"]),
			afterWork: new SyncBailHook(["activity"])
		};
	}
	prepare(){
		this.hooks.beforeWork.tap("wakeup",(getUp)=>{
			getUp.prepare()
		})
		this.hooks.beforeWork.tap("beforeWork",(getUp)=>{
			getUp.start()
		})
		this.hooks.atWork.tap("arrivedCompany",(workTask)=>{
			workTask.prepare()
		})
		this.hooks.atWork.tap("atWork",(workTask)=>{
			workTask.start()
		})
		this.hooks.afterWork.tap("activity",(activity)=>{
			console.log("activity")
		})
	}
	run(callback){
		this.hooks.beforeWork.call(this.getUp)
		this.hooks.atWork.call(this.workTask)
		//this.hooks.activity.call(this.activity)
	}
}
/**
 * 实例化我的某一天
 *  */
const oneDay = new MyDaily();
oneDay.prepare()
oneDay.run()