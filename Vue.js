new Vue({
    el: '#root',
    template: `
<div class="container">
            <h1>Comentarios</h1>
            <hr/>
        <div class="form-todo form-group">
            <p>
                <input type="text" placeholder="nome" name="author" class="form-control" v-model="name">
            </p>
            <textarea name="message" placeholder="Comentario" class="form-control" v-model="message"></textarea>
        </div>
            <button v-on:click="addComment" type="submit" class="btn btn-primary">Comentar</button>
        
            <hr />
            <div class="list-group" >
                <div class="list-group-iten" v-for="(comment, index) in allComments">
                    <span class="coment_author">Author: <strong>{{comment.name}}</strong> </span>
                    <p>{{comment.message}}</p>
                    <a href="#" title="Exicluir" v-on:click.prevent="removeComment(index)" >Exicluir</a>
                </div>
            </div>
</div>
<hr />
    `,
    data(){
        return {
            comment: [],
            name: '',
            message: '',
        }
    },
    methods: {
        addComment(){
            if(this.message.trim() === ''){
                return
            }
           this.comment.push({
               name: this.name,
               message: this.message
           })
           this.name = this.message = ''
        },
        removeComment(index){
            this.comment.splice(index, 1)
        },
    },

    computed: {
        allComments(){
            return this.comment.map(comment => ({
                ...comment
                ,name: comment.name.trim() === '' ? "Anônimo" : comment.name
            }))
        }
    }
})