<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'MyProject') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead

        <link id="theme-css" href={{asset('/themes/tailwind-light/theme.css')}} rel="stylesheet"></link>
        <!-- md-dark-indigo -->
        <!-- <link id="theme-css" href={{asset('/themes/md-dark-indigo/theme.css')}} rel="stylesheet"></link> -->
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
