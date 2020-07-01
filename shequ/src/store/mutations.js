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
    change(state,callbacks){
        callbacks(state)
    }
}
