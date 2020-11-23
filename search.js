$(document).ready(function () {
    function checking(x) {
        if(x === 1) {
            return `<li class="page-item"><span class="page-link" style="cursor:not-allowed">...</span></li>`;;
        } else return '';
    }

    window.myFunction = function (url, page = 1) {
        let input, tr;
        input = document.getElementById("myInput");
        let tbody = document.getElementsByTagName("tbody");
        tr = "";
        let pathName = window.location.pathname;
        $.ajax({
            url: url+"?page="+page,
            type:'GET',
            contentType:'application/json',
            headers: {
                'X-CSRF-Token': "{{ csrf_token() }}",
                'Access-Control': 'Allow-Origin'
            },
            data: {
                'search':input.value
            },

            success: function(response) {
                let j = 1;
                let resp = response.data;
                if(resp) {
                    $(tbody).empty();
                    resp.forEach(function(item) {
                        tr += `<tr class="myTr">
                            <td class="num">${j}.</td>
                            <td class="filterable">${item.title}</td>
                            <td>
                                <form>
                                    <div class='btn-group'>
                                        <a href="data/${item.id}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                                        <a href="data/${item.id}/edit" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                                        <button type="submit" class="btn btn-danger btn-xs dlt"><i class="glyphicon glyphicon-trash"></i></button>
                                    </div>
                                </form>
                            </td>
                        </tr>`;
                        j++;
                    });

                    let pag = '<nav aria-label="Page navigation example"><ul class="pagination">';
                    pag += `<li class="page-item"><a class="page-link" aria-label="« Previous" style="cursor: ${(page == 1) ? 'not-allowed' : 'pointer'}" onclick="myFunction('${pathName}', ${(page > 1) ? page-1 : 1})">‹</a></li>`;

                    let p = 0;
                    let n = 0;

                    for(let i=1; i<=response.last_page; i++) {
                        if(response.last_page > 10) {
                            if (page >= 8 && page <= (response.last_page - 7)) {
                                if (i > 2 && i < (page - 3)) {
                                    p++;
                                    pag += checking(p);
                                    continue;
                                }
                                if (i < (response.last_page - 1) && i > (page + 3)) {
                                    n++;
                                    pag += checking(n);
                                    continue;
                                }
                            } else if(page < 8){
                                if(i > 10 && i < (response.last_page - 1)) {
                                    p++;
                                    pag += checking(p);
                                    continue;
                                }
                            } else {
                                if(i < (response.last_page - 9) && i > 2) {
                                    n++;
                                    pag += checking(n);
                                    continue;
                                }
                            }
                        }

                        pag += `<li class="page-item ${(page == i) ? 'active' : ''}" ><a class="page-link" style="cursor:pointer;" onclick="myFunction('${pathName}', ${i})">${i}</a></li>`;
                    }
                    pag += `<li class="page-item aria-label="Next »"><a class="page-link" style="cursor:${(page == response.last_page) ? 'not-allowed' : 'pointer'}" onclick="myFunction('${pathName}', ${(page < response.last_page) ? page+1 : response.last_page})">›</a></li>`;

                    pag += '</ul></nav>';
                    $('#links').html(pag);
                    $(tbody).html(tr);
                }
            }
        });
    };

