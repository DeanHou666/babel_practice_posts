class UI {
  constructor() {
    this.titleInput=document.querySelector('#title')
    this.bodyInput=document.querySelector('#body')
    this.idInput=document.querySelector('#id')
  }
  showPosts(posts) {
    let output = ''
    posts.forEach(post => {
      output += `
      <div class="card">
        <div class="card-body">
        <h4 class="card-title"> ${post.title}</h4>
        <p class="card-text">${post.body}</p>
          <a href="#" class="edit card-link" data-id=${post.id}>
            <i class="fa fa-pencil"></i>
          </a>
          <a href="#" class="delete card-link" data-id=${post.id}>
          <i class="fa fa-remove"></i>
          </a>
        </div>
      </div>
      `
      document.getElementById('posts').innerHTML = output
    });
  }

  showAlert(msg, msgclass) {
    this.clearAlert()
    const div = document.createElement('div');
    div.className = msgclass;
    div.appendChild(document.createTextNode(msg));

    const container = document.querySelector('.postContainer');
    const posts = document.querySelector('#posts');

    container.insertBefore(div, posts)
    setTimeout(() => {
      this.clearAlert()
    }, 2000);
  }
  clearAlert(){
    const currentAlert = document.querySelector('.alert')
    if(currentAlert){
      currentAlert.remove();
    }
  }
  clearFields(){
    this.titleInput.value=''
    this.bodyInput.value=''
  }

  fillForm(data){
    this.titleInput.value=data.title
    this.bodyInput.value=data.body
    this.idInput.value = data.id
  }
  
}

export const ui = new UI()

