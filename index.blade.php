@extends('layouts.app')

@section('content')
    <div class="row">
        <input class="btn btn-default col-lg-6" type="text" name="search" id="myInput" onkeyup="myFunction('{{Request::path()}}')" placeholder="Search by name" aria-label="Search">
    </div>
    <section class="content-header">

        <h1 class="pull-left">Data</h1>
        <h1 class="pull-right">
            <a class="btn btn-primary pull-right" style="margin-top: -10px;margin-bottom: 5px" href="{{ route('data.create') }}">Add new</a>
        </h1>
    </section>
    <div class="content">
        <div class="clearfix"></div>
        @include('flash::message')
        <div class="clearfix"></div>
        <div class="box box-primary">
            <div class="box-body">
                @include('data.table')
            </div>
        </div>
        <div class="text-center">

        </div>
    </div>

@endsection

