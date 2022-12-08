<?php

namespace App\Entity;

use App\Repository\InfoPerfilRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * InfoPerfil
 *
 * @ORM\Table(name="INFO_PERFIL")
 * @ORM\Entity(repositoryClass="App\Repository\InfoPerfilRepository")
 */
class InfoPerfil
{
    /**
     * @var int
     *
     * @ORM\Column(name="ID_PERFIL", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
    * @var InfoModuloAccion
    *
    * @ORM\ManyToOne(targetEntity="InfoModuloAccion")
    * @ORM\JoinColumns({
    * @ORM\JoinColumn(name="MODULO_ACCION_ID", referencedColumnName="ID_MODULO_ACCION")
    * })
    */
    private $MODULO_ACCION_ID;

    /**
    * @var InfoUsuario
    *
    * @ORM\ManyToOne(targetEntity="InfoUsuario")
    * @ORM\JoinColumns({
    * @ORM\JoinColumn(name="USUARIO_ID", referencedColumnName="ID_USUARIO")
    * })
    */
    private $USUARIO_ID;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $DESCRIPCION;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $ESTADO;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $USR_CREACION;

    /**
     * @ORM\Column(type="datetime")
     */
    private $FE_CREACION;

    /**
     * @var string
     *
     * @ORM\Column(name="USR_MODIFICACION", type="string", length=255, nullable=true)
     */
    private $USR_MODIFICACION;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="FE_MODIFICACION", type="datetime", nullable=true)
     */
    private $FE_MODIFICACION;

    public function getId(): ?int
    {
        return $this->id;
    }


    /**
     * Set USUARIOID
     *
     * @param \App\Entity\InfoUsuario $USUARIOID
     *
     * @return InfoPerfil
     */
    public function setUSUARIOID(\App\Entity\InfoUsuario $USUARIOID = null)
    {
        $this->USUARIO_ID = $USUARIOID;

        return $this;
    }

    /**
     * Get USUARIOID
     *
     * @return \App\Entity\InfoUsuario
     */
    public function getUSUARIOID()
    {
        return $this->USUARIO_ID;
    }

    /**
     * Set MODULOACCIONID
     *
     * @param \App\Entity\InfoModuloAccion $MODULOACCIONID
     *
     * @return InfoPerfil
     */
    public function setMODULOACCIONID(\App\Entity\InfoModuloAccion $MODULOACCIONID = null)
    {
        $this->MODULO_ACCION_ID = $MODULOACCIONID;

        return $this;
    }

    /**
     * Get MODULOACCIONID
     *
     * @return \App\Entity\InfoModuloAccion
     */
    public function getMODULOACCIONID()
    {
        return $this->MODULO_ACCION_ID;
    }

    public function getDESCRIPCION(): ?string
    {
        return $this->DESCRIPCION;
    }

    public function setDESCRIPCION(string $DESCRIPCION): self
    {
        $this->DESCRIPCION = $DESCRIPCION;

        return $this;
    }


    public function getESTADO(): ?string
    {
        return $this->ESTADO;
    }

    public function setESTADO(?string $ESTADO): self
    {
        $this->ESTADO = $ESTADO;

        return $this;
    }

    public function getUSRCREACION(): ?string
    {
        return $this->USR_CREACION;
    }

    public function setUSRCREACION(string $USR_CREACION): self
    {
        $this->USR_CREACION = $USR_CREACION;

        return $this;
    }

    public function getFECREACION(): ?\DateTimeInterface
    {
        return $this->FE_CREACION;
    }

    public function setFECREACION(\DateTimeInterface $FE_CREACION): self
    {
        $this->FE_CREACION = $FE_CREACION;

        return $this;
    }

    public function getUSRMODIFICACION(): ?string
    {
        return $this->USR_MODIFICACION;
    }

    public function setUSRMODIFICACION(?string $USR_MODIFICACION): self
    {
        $this->USR_MODIFICACION = $USR_MODIFICACION;

        return $this;
    }

    public function getFEMODIFICACION(): ?\DateTimeInterface
    {
        return $this->FE_MODIFICACION;
    }

    public function setFEMODIFICACION(?\DateTimeInterface $FE_MODIFICACION): self
    {
        $this->FE_MODIFICACION = $FE_MODIFICACION;

        return $this;
    }
}
