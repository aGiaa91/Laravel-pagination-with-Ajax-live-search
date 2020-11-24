<div class="table-responsive">
    <table class="table" id="categories-table">
        <thead>
        <tr>
            <th></th>
            <th>Title</th>
            <th colspan="3">Аctions</th>
        </tr>
        </thead>
        <tbody>
        @php $i=1;
        @endphp
        @foreach($data as $one)
            <tr class="myTr">
                <td class="num">{{$i++}}.</td>
                <td class="filterable">{{ $one->title }}</td>
            </tr>
        @endforeach
        </tbody>
    </table>
    <div id="links">{{ $data->links() }}</div>

</div>

