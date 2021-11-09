<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\RangeFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use App\Repository\LotRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=LotRepository::class)
 */
#[ApiResource(
    paginationItemsPerPage: 3,
    normalizationContext: ['groups' => ['read:lot:collection']],
    itemOperations: [
        'put',
        'delete',
        'patch',
        'get' => [
            'normalization_context' => ['groups' => ['read:lot:item']]
        ]
    ]
)]
#[ApiFilter(SearchFilter::class, properties: ['program.name' => 'partial'])]
#[ApiFilter(RangeFilter::class, properties: ['area', 'price'])]
class Lot
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
     #[Groups(['read:lot:collection', 'read:lot:item'])]
    private $number;

    /**
     * @ORM\Column(type="float")
     */
    #[Groups(['read:lot:collection', 'read:lot:item'])]
    private $area;

    /**
     * @ORM\Column(type="integer")
     */
    #[Groups(['read:lot:collection', 'read:lot:item'])]
    private $price;

    /**
     * @ORM\ManyToOne(targetEntity=Program::class, inversedBy="lots")
     */
    #[Groups(['read:lot:collection', 'read:lot:item'])]
    private $program;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumber(): ?string
    {
        return $this->number;
    }

    public function setNumber(string $number): self
    {
        $this->number = $number;

        return $this;
    }

    public function getArea(): ?float
    {
        return $this->area;
    }

    public function setArea(float $area): self
    {
        $this->area = $area;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getProgram(): ?Program
    {
        return $this->program;
    }

    public function setProgram(?Program $program): self
    {
        $this->program = $program;

        return $this;
    }
}
