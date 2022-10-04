import axios from 'axios'

const response_uri = "http://localhost:3001/articles/"

const state = {
    articles: []
}

const getters = {
    allArticles: state => state.articles
}

const actions = {
    async getArticles({commit}){
        const response = await axios.get(response_uri)
        commit('gArticles', response.data)
    }
}

const mutations = {
    gArticles: (state, articles) => state.articles = articles,
}

export default{
    state, getters, actions, mutations
}