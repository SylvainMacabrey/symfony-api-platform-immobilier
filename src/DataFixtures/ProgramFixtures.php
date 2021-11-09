<?php

namespace App\DataFixtures;

use App\Entity\Program;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker;

class ProgramFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Faker\Factory::create('fr_FR');
        for($i = 0; $i < 10; $i++) {
            $program = new Program();
            $program->setName("Quartier de " . $faker->lastname);
            $program->setAddress($faker->address);
            $program->setPicture("https://picsum.photos/seed/" . rand() . "/200/200");
            $manager->persist($program);
            $this->addReference('program_' . $i, $program);
        }

        $manager->flush();
    }
}
