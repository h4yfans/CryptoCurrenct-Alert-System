<?php

use App\Domain;
use Illuminate\Database\Seeder;

class DomainsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $domains = ['http://cointracker.dev/', 'http://159.89.9.108/'];


        foreach($domains as $domain){
            Domain::create(['domain' => $domain]);
        }
    }
}
