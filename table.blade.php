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
                <td>
                    {!! Form::open(['route' => ['data.destroy', $one->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('data.show', [$one->id]) }}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                        <a href="{{ route('data.edit', [$one->id]) }}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                        {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
    <div id="links">{{ $data->links() }}</div>

</div>

