class UI {
  constructor() {
    this.titleInput = document.querySelector('#title')
    this.bodyInput = document.querySelector('#body')
    this.idInput = document.querySelector('#id')
    this.postSubmit = document.querySelector('.post-submit')
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
    })
    document.getElementById('posts').innerHTML = output
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
  clearIdInput(){
    this.idInput.value='';
  }
  clearAlert() {
    const currentAlert = document.querySelector('.alert')
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  clearFields() {
    this.titleInput.value = ''
    this.bodyInput.value = ''
  }

  fillForm(data) {
    this.titleInput.value = data.title
    this.bodyInput.value = data.body
    this.idInput.value = data.id
    this.changeState('edit')
  }

  changeState(type) {
    if (type === 'edit') {
      this.postSubmit.textContent = 'update Post'
      this.postSubmit.className='post-update btn btn-warning btn-block'
      const button= document.createElement('button');
      button.appendChild(document.createTextNode('cancel post'))
      button.className='btn btn-alert post-cancel'
      const postCard = document.querySelector('.card-form')
      const formEnd=document.querySelector('#form-end')
      postCard.insertBefore(button,formEnd)
    }else{
      this.postSubmit.textContent='add Post'
      this.postSubmit.className="post-submit btn btn-primary btn-block"
      if(document.querySelector('.post-cancel')){
        document.querySelector('.post-cancel').remove()
      }
      this.clearIdInput()
      this.clearFields()
    }
  }


}

export const ui = new UI()

