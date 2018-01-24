<template>
	<div>

	</div>
</template>

<script>
   import { Toast ,Actionsheet,Popup,Indicator} from 'mint-ui';
   import Api from '@/api.js'
    export default {
        data() {
            return {

            }
        },
        methods: {


        },

        mounted() {
        	var jsons = {
        		paymentType:this.$route.query.paymentType,
        		addressId:this.$route.query.addressId,
        		dbId:this.$route.query.dbId,
        		userDbId:this.$route.query.userDbId,
        		openId:this.$route.query.openId,
            client:'mobile',
        		subject:'努比亚支付'
        	};
        	if(this.$route.query.isZeroPaid == 1){
        		Api.car.updataOrderStatus3Pay({id:jsons.dbId, status:3}).then(res=>{
				if(res.data.status == 1){
                    var stateObj = { foo: "bar" };
					this.$router.push( { path : '/orderList'})
				}
			},err=>{
				Toast('请求数据失败');
			})
        	}else{

        	Api.car.orderPay(jsons).then(res=>{
    		  if(res.data.code === 'success'){
//  		  	var orderJsonStr = "{\"cp_order_id\":\"tdyshshhs\",\"product_name\":\"dddddd\",\"product_des\":\"dddddd\",\"product_price\":0.009999999776482582,\"product_num\":2,\"data_timestamp\":546466767676}";
			var orderJsonStr = {"cp_order_id":res.data.cp_order_id,"product_name":res.data.product_name,"product_des":res.data.product_des,"amount":res.data.amount,"product_price":res.data.product_price,"product_num":res.data.product_num,"data_timestamp":res.data.data_timestamp}
//			alert(JSON.stringify(orderJsonStr))
			if(window.YaChang){ //如果方法存在
				window.YaChang.onSumResult(JSON.stringify(orderJsonStr))
			}
			console.log(res.data)
			console.log(orderJsonStr)
					//手机微信支付
//					wxpay(res.data,function callback(res){
//                      //alert(res.errMsg);
//                      
//						if(res.errMsg=="chooseWXPay:fail"){
//							Toast('调起支付失败');
//							Api.car.updataOrderStatus2Pay({dbId:jsons.dbId, status:1}).then(res=>{
//								if(res.data.code == 'success'){
//                                  var stateObj = { foo: "bar" };
//                                  history.pushState(stateObj, "", "#user");
//
//									this.$router.push( { path : '/orderList'})
//								}
//
//							},err=>{
//								Toast('请求数据失败');
//							})
//
//						}else if(res.errMsg == "chooseWXPay:cancel" ) {//用户取消订单
//
//							Api.car.updataOrderStatus2Pay({dbId:jsons.dbId, status:1}).then(res=>{
//								if(res.data.code == 'success'){
//									//this.$router.replace({path:"/orderList"})
////												this.$router.replace({path:"/orderList"})
//                                  var stateObj = { foo: "bar" };
//                                  history.pushState(stateObj, "", "#user");
//									this.$router.push( { path : '/orderList'})
//								}
//
//							},err=>{
//
//                               var stateObj = { foo: "bar" };
//                              history.pushState(stateObj, "", "#user");
//
//								Toast('请求数据失败');
//                              this.$router.push( { path : '/orderList'})
//							})
//
//                          var stateObj = { foo: "bar" };
//                          history.pushState(stateObj, "", "#user");
//							Toast('用户取消支付');
//							this.$router.push( { path : '/orderList'})
//
//						}else{
//							Toast('支付成功');
//                          //this.$router.replace({path:"/orderList"})
//                          var stateObj = { foo: "bar" };
//                          history.pushState(stateObj, "", "#user");
//                          this.$router.push( { path : '/orderList'})
//						}
//					
//					});

				} else {

//                  if(res.data.acquireOpenId && res.data.acquireOpenId === 'Y'){
//                      window.location.href= res.data.codeUrl;
//                  } else if(res.data.pay && res.data.pay === 'Y'){
//                      this.$router.push( { path : '/user'})
//                  }
//                  else {
//                      Toast('支付失败');
//                      Api.car.updataOrderStatus2Pay({dbId:jsons.dbId, status:1}).then(res=>{
//                      if(res.data.code == 'success'){
//                          var stateObj = { foo: "bar" }
//                          history.pushState(stateObj, "", "#user")
//							this.$router.push( { path : '/orderList'})
//                      }
//
//                      },err=>{
//                          Toast('请求数据失败');
//                      })
//                  }

				}
    	   },err=>{
    		Toast('请求数据失败');
    	   })
      }
   }
  }
</script>

<style>
</style>
