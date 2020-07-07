export default{
    userStatus (state, flag) {
       state.isLogin = flag
    },
    userstatns(state,flag){
        state.isNav=flag
    },
    userstatms(state,flag){
        state.minNav=flag
    },
    userNavFb(state,flag){
        state.navFb=flag
    },
    change(state,callbacks){
        callbacks(state)
    }
}
