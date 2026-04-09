<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Owner Dashboard | Build My Dwelling</title>
    <style>
        body {
            font-family: sans-serif;
            padding: 40px;
            background: #f4f4f4;
        }
        .container {
            max-width: 1000px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #b38b59;
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            padding: 12px;
            border-bottom: 1px solid #eee;
            text-align: left;
        }
        th {
            background: #1a1a1a;
            color: white;
        }
        .login-box {
            text-align: center;
            padding: 50px;
        }
        input {
            padding: 10px;
            width: 250px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        button {
            padding: 10px 20px;
            background: #b38b59;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 4px;
        }
        #dashboard {
            display: none;
        }

        .btn-center {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.danger {
    background: red;
    color: white;
    padding: 10px 25px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}


.bottom-btn {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 12px 25px;
    background: red;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}


    </style>
</head>
<body>

<div class="container">

    <!-- Login Section -->
    <div id="login-section" class="login-box">
        <h1>Owner Access</h1>
        <p>Enter admin password</p>
        <input type="password" id="admin-pass" placeholder="Enter Password"><br><br>
        <button onclick="loadData()">Access Dashboard</button>
    </div>

    <!-- Dashboard -->
    <div id="dashboard">
        <h1>Project Inquiries</h1>
        <button onclick="logout()" style="float:right;background:#333;">Logout</button>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Project_Type</th>
                    <th>Message</th>
                    <th>Date</th>
                <td colspan="7" style="text-align:center;">
                    <button  class="bottom-btn" onclick="clearAll()" style="background:red;">Clear All</button>
                </td>
                </tr>
            </thead>
            <tbody id="table-body"></tbody>
            
        </table>
    </div>

</div>

<!--<button onclick="clearAll()" style="background:red;">Clear All</button>-->


<script>
const ADMIN_PASSWORD = "Isha785";

function loadData() {
    const password = document.getElementById("admin-pass").value;
    if (password !== ADMIN_PASSWORD) {
        alert("Wrong Password!");
        return;
    }

    document.getElementById("login-section").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";

    const inquiries = JSON.parse(localStorage.getItem("inquiries")) || [];

    inquiries.forEach(item => {
        tableBody.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.type}</td>
                <td>${item.message}</td>
                <td>${item.date}</td>
            </tr>
        `;
        
    });
}

function logout() {
    location.reload();
}

function deleteRow(index) {
    let inquiries = JSON.parse(localStorage.getItem("inquiries")) || [];
    inquiries.splice(index, 1);
    localStorage.setItem("inquiries", JSON.stringify(inquiries));
    loadData(); // refresh table
}

function clearAll() {
    if (confirm("Delete all inquiries?")) {
        localStorage.removeItem("inquiries");
        loadData();
    }
}


</script>


</body>
</html>
