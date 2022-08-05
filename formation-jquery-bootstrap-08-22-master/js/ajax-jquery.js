function conversionJsonHtmlPosts(posts) {
    let html;

    for (let post of posts) {
        html += `<div id="post${post.id}" class="post">`;
        html +=     `<h2>${post.title}</h2>`;
        html +=     `<p>${post.body}</p>`;
        html += `</div>`;
    }

    return html;
}

function conversionJsonHtmlUsers(users) {
    let html;

    html += `<table><thead><tr>`;
    html += `<th>Nom</th><th>Nom utilisateur</th><th>Email</th><th>Adresse</th>`;
    html += `</tr></thead>`;
    html += `<tbody>`;

    for (let user of users) {
        html += `<tr>`;
        html += `<td>${user.name}</td>`;
        html += `<td>${user.username}</td>`;
        html += `<td>${user.email}</td>`;
        html += `<td>${user.address.street}<br />`;
        html += `${user.address.city}<br />`;
        html += `${user.address.zipcode}</td>`;
        html += `</tr>`;
    }

    html += `</tbody><table>`;

    return html;
}

jQuery(function ($) {
    $('#recupererPosts').click(() => {
        $.ajax({
            url: "./json/posts.json",
            type: "GET",
            dataType: "json"
        })
        .done(function (response) {
            console.log("Connexion OK");

            $('#conteneurPosts').html(conversionJsonHtmlPosts(response));
        })
        .fail(function (error) {
            console.log("La requête s'est terminée avec un échec : " + error.responseText);
            $('#conteneurPosts').html(error.responseText);
        })
        .always(function () {
            console.log("Requête effectuée");
        })
    });

    $('#recupererUsers').click(() => {
        $.get(
            "./json/users.json",
            function (response) {
                $('#conteneurUsers').html(conversionJsonHtmlUsers(response));
            },
            "json"
        )
        .fail(function (error) {
            $('#conteneurUsers').html(error.responseText);
        })
        .always(function () {
            console.log("Requête effectuée");
        })
    });
})