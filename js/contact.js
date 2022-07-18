const form = document.querySelector('#form')

form.addEventListener('submit', handleSubmit)

async function handleSubmit(e){
    e.preventDefault()

    const formL = new FormData(this)
  const response =  await fetch(this.action, {
        method: this.method,
        body: formL,
        headers:{
            'Accept': 'application/json'
        }
    })
    if(response.ok){
        this.reset()
    }
}