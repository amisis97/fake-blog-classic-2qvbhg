const createPost = () => ({
  title: 'title',
  body: 'body',
  date: new Date(new Date().setDate(new Date().getDate() + Math.round(Math.random() * 10)))
})


const getPosts = () => new Promise((res, rej) => {
  const postCount = 5
  const posts = Array.from({length: postCount}, createPost);
  setTimeout(() => {
    res({
      data: posts
    });
  }, 1000);
})

const feladat = (sort = 'desc') => getPosts().then(val => {
  const target = document.querySelector('.target');
  val.data.forEach(v => v.like = 0);
  val.data.sort((a, b) => sort === 'asc' ? a.date - b.date : b.date - a.date)
  console.log(val)
  val.data.forEach(v => {
    const html = `<div>${v.title}</div><div>${v.body}</div><div>${v.date}</div>`;
    target.innerHTML += html;
  })
})

feladat('desc')
