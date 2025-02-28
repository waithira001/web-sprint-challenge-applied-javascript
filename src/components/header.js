const Header = (title, date, temp) => {
  const head = document.createElement('div');
  const spanDate = document.createElement('span');
  const h1Title = document.createElement('h1');
  const spanTemp = document.createElement('span');

  head.classList = 'header';
  spanDate.classList = 'date';
  spanTemp.classList = 'temp';

  head.appendChild(spanDate);
  head.appendChild(h1Title);
  head.appendChild(spanTemp);

  spanDate.textContent = `${date}`;
  h1Title.textContent = `${title}`;
  spanTemp.textContent = `${temp}`;

  return head;
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  let entry = document.querySelector(selector)
  entry.appendChild(Header('Lambda Times', '1/6/21', '26 Degrees'))
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
