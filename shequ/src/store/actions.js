export default{
    setUser ({commit}, flag) {
        commit('userStatus', flag)
    },
    setNav({commit},flag){
        commit('userstatns',flag)
    },
    setMin({commit},flag){
        commit('userstatms',flag)
    }
}