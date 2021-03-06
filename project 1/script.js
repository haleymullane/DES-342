//THIS IS THE WATER DRAGGABLE
// Make the DIV element draggable:
dragElement(document.getElementById('water'))

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0
  if (document.getElementById(elmnt.id + 'water')) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + 'water').onmousedown = dragMouseDown
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown
  }

  function dragMouseDown(e) {
    e = e || window.event
    e.preventDefault()
    // get the mouse cursor position at startup:
    pos3 = e.clientX
    pos4 = e.clientY
    document.onmouseup = closeDragElement
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag
  }

  function elementDrag(e) {
    e = e || window.event
    e.preventDefault()
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX
    pos2 = pos4 - e.clientY
    pos3 = e.clientX
    pos4 = e.clientY
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + 'px'
    elmnt.style.left = elmnt.offsetLeft - pos1 + 'px'
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null
    document.onmousemove = null
  }
}
//THIS IS THE NEWS DRAGGABLE
// Make the DIV element draggable:
dragElement(document.getElementById('news'))

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0
  if (document.getElementById(elmnt.id + 'news')) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + 'news').onmousedown = dragMouseDown
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown
  }

  function dragMouseDown(e) {
    e = e || window.event
    e.preventDefault()
    $('#water').addClass('rotate')
    // get the mouse cursor position at startup:
    pos3 = e.clientX
    pos4 = e.clientY
    document.onmouseup = closeDragElement
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag
  }

  function elementDrag(e) {
    e = e || window.event
    e.preventDefault()
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX
    pos2 = pos4 - e.clientY
    pos3 = e.clientX
    pos4 = e.clientY
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + 'px'
    elmnt.style.left = elmnt.offsetLeft - pos1 + 'px'
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null
    document.onmousemove = null
    setTimeout(function () {
      $('#water').removeClass('rotate')
      $('#water').css('top', '0').css('right', '105px')
      $('#news').css('top', '0').css('left', '105px')
    }, 1000)
  }
}

// Counter code
let curFireNum = 1

$('#news-link').click(function () {
  curFireNum++
  incrementFire(curFireNum)
})
$('#water-link').click(function () {
  curFireNum--
  decrementFire(curFireNum)
})

function incrementFire(curFireNum) {
  if (curFireNum == 1) {
    $('#news-link').attr('href', '#one')
  } else if (curFireNum == 2) {
    $('#news-link').attr('href', '#two')
  } else if (curFireNum == 3) {
    console.log(curFireNum)
    $('#news-link').attr('href', '#three')
  } else if (curFireNum >= 4) {
    alert('This fire is explosive! Let the individual take a break and moment to themselves instead of trying to resolve the situation in the moment.')
    curFireNum = 3
  }

  return updateFireNum(curFireNum)
}

function decrementFire(curFireNum) {
  if (curFireNum == 1) {
    $('#water-link').attr('href', '#one')
  } else if (curFireNum == 2) {
    $('#water-link').attr('href', '#two')
  } else if (curFireNum == 3) {
    $('#water-link').attr('href', '#three')
  } else if (curFireNum <= 1) {
    alert('This fire is relaxed! All of the needs have been met and this individual is ready to move forward.')
    curFireNum = 1
  }
  return updateFireNum(curFireNum)
}

function updateFireNum(curFireNum) {
  $('#firenum').html(curFireNum)
}
