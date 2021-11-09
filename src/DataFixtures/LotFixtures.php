<?php

namespace App\DataFixtures;

use App\Entity\Lot;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
class LotFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        for($i = 0; $i < 100; $i++) {
            $lot = new Lot();
            $lot->setNumber("A" . rand(100, 999));
            $lot->setArea(rand(30, 150));
            $lot->setPrice(rand(100000, 500000));
            $lot->setProgram($this->getReference('program_' . rand(0, 9)));
            $manager->persist($lot);
        }

        $manager->flush();
    }

    public function getDependencies() 
    {
        return array (
            ProgramFixtures::class
        );
    }
}
