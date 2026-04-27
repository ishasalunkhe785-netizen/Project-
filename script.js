const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: contactForm.querySelector('input[placeholder="Your Name"]').value,
        email: contactForm.querySelector('input[placeholder="Your Email"]').value,
        project_type: contactForm.querySelector('select').value,
        message: contactForm.querySelector('textarea').value
    };

    try {
        const response = await fetch('http://localhost:3000/api/inquiry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
            alert('Success! Your inquiry has been stored in MySQL.');
            contactForm.reset();
        } else {
            alert('Error: ' + result.error);
        }
    } catch (error) {
        console.error('Fetch Error:', error);
        /*alert('Could not connect to the database server.');*/
    }
});
const SUPABASE_URL='lyxepcburcshbkjxsfio'
const { createClient } = supabase
const db = createClient(lyxepcburcshbkjxsfio)

async function login(email, password) {
  const { data, error } = await db.auth.signInWithPassword({
    email: email,
    password: password
  })
  if (error) {
    alert('Login failed: ' + error.message)
  } else {
    const user = data.user
    if (user.email === 'admin@yoursite.com') {
      showAdminDashboard()
    } else {
      showClientView()
    }
  }
}

async function loadRecords() {
  const { data, error } = await db
    .from('records')
    .select('*')
    .eq('status', 'active')  // clients only see active

  if (error) {
    console.error(error)
  } else {
    displayRecords(data)  // your function to show cards
  }
}

async function addRecord(name, category, value, status, notes) {
  const { error } = await db
    .from('records')
    .insert([{ name, category, value, status, notes }])

  if (!error) loadAllRecords()
}

async function editRecord(id, updates) {
  const { error } = await db
    .from('records')
    .update(updates)
    .eq('id', id)

  if (!error) loadAllRecords()
}

async function deleteRecord(id) {
  const { error } = await db
    .from('records')
    .delete()
    .eq('id', id)

  if (!error) loadAllRecords()
}