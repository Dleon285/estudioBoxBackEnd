<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;
use App\Entity\InfoCliente;
use App\Entity\AdmiTipoRol;
use App\Entity\InfoUsuarioEmpresa;
use App\Entity\InfoUsuario;
class InfoClienteController extends AbstractController
{
    /**
     * @Rest\Post("/apiMovil/createCliente")
     * 
     * Documentación para la función 'createCliente'.
     *
     * Función que permite crear clientes.
     *
     * @author Kevin Baque Puya
     * @version 1.0 08-12-2022
     *
     */
    public function createCliente(Request $objRequest)
    {
        $arrayRequest         = json_decode($objRequest->getContent(),true);
        $arrayData            = isset($arrayRequest["data"]) && !empty($arrayRequest["data"]) ? $arrayRequest["data"]:array();
        $strIdentificacion    = isset($arrayData["strIdentificacion"]) && !empty($arrayData["strIdentificacion"]) ? $arrayData["strIdentificacion"]:"";
        $strNombre            = isset($arrayData["strNombre"]) && !empty($arrayData["strNombre"]) ? $arrayData["strNombre"]:"";
        $strCorreo            = isset($arrayData["strCorreo"]) && !empty($arrayData["strCorreo"]) ? $arrayData["strCorreo"]:"";
        $strContrasenia       = isset($arrayData["strContrasenia"]) && !empty($arrayData["strContrasenia"]) ? $arrayData["strContrasenia"]:"";
        $strAutenticacionRs   = isset($arrayData["strAutenticacionRs"]) && !empty($arrayData["strAutenticacionRs"]) ? $arrayData["strAutenticacionRs"]:"";
        $strEdad              = isset($arrayData["strEdad"]) && !empty($arrayData["strEdad"]) ? $arrayData["strEdad"]:"SIN EDAD";
        $strGenero            = isset($arrayData["strGenero"]) && !empty($arrayData["strGenero"]) ? $arrayData["strGenero"]:"SIN GENERO";
        $strEstado            = isset($arrayData["strEstado"]) && !empty($arrayData["strEstado"]) ? $arrayData["strEstado"]:"INACTIVO";
        $strUsrSesion         = isset($arrayData["strUsrSesion"]) && !empty($arrayData["strUsrSesion"]) ? $arrayData["strUsrSesion"]:"appMovil";
        $objResponse          = new Response;
        $objDatetimeActual    = new \DateTime('now');
        $intStatus            = 200;
        $em                   = $this->getDoctrine()->getManager();
        $strMensaje           = "";
        try
        {
            $objCliente = $this->getDoctrine()->getRepository(InfoCliente::class)->findOneBy(array("CORREO" => $strCorreo));
            if(empty($objCliente) || !is_object($objCliente))
            {
                $em->getConnection()->beginTransaction();
                $entityCliente = new InfoCliente();
                $entityCliente->setIDENTIFICACION($strIdentificacion);
                $entityCliente->setNOMBRE($strNombre);
                $entityCliente->setCORREO($strCorreo);
                $entityCliente->setCONTRASENIA(md5($strContrasenia));
                $entityCliente->setAUTENTICACIONRS($strAutenticacionRs);
                $entityCliente->setEDAD($strEdad);
                $entityCliente->setGENERO($strGenero);
                $entityCliente->setESTADO(strtoupper($strEstado));
                $entityCliente->setUSRCREACION($strUsrSesion);
                $entityCliente->setFECREACION($objDatetimeActual);
                $em->persist($entityCliente);
                $em->flush();
                $strMensaje = "¡Cliente creado con éxito!";
                if($em->getConnection()->isTransactionActive())
                {
                    $em->getConnection()->commit();
                    $em->getConnection()->close();
                }
            }
            else
            {
                throw new \Exception('Cliente ya existe con el correo: '.$strCorreo);
            }
        }
        catch(\Exception $ex)
        {
            $intStatus = 204;
            if($em->getConnection()->isTransactionActive())
            {
                $em->getConnection()->rollback();
            }
            $strMensaje = $ex->getMessage();
        }
        $objResponse->setContent(json_encode(array("intStatus"  => $intStatus,
                                                   "strMensaje" => $strMensaje)));
        $objResponse->headers->set("Access-Control-Allow-Origin", "*");
        return $objResponse;
    }

    /**
     * @Rest\Post("/apiMovil/getCliente")
     * 
     * Documentación para la función 'getCliente'.
     *
     * Función que permite listar clientes.
     *
     * @author Kevin Baque Puya
     * @version 1.0 28-12-2022
     *
     */
    public function getCliente(Request $objRequest)
    {
        $arrayRequest         = json_decode($objRequest->getContent(),true);
        $arrayData            = isset($arrayRequest["data"]) && !empty($arrayRequest["data"]) ? $arrayRequest["data"]:array();
        $objResponse          = new Response;
        $intStatus            = 200;
        $em                   = $this->getDoctrine()->getManager();
        $strMensaje           = "";
        try
        {
            $arrayCliente = $this->getDoctrine()->getRepository(InfoCliente::class)->getCliente($arrayData);
            if(!empty($arrayCliente["error"]))
            {
                throw new \Exception($arrayCliente["error"]);
            }
            if(count($arrayCliente["resultados"])==0)
            {
                throw new \Exception("No existen clientes con los parámetros enviados.");
            }
        }
        catch(\Exception $ex)
        {
            $intStatus = 204;
            $strMensaje = $ex->getMessage();
        }
        $objResponse->setContent(json_encode(array("intStatus"     => $intStatus,
                                                   "arrayCliente"  => isset($arrayCliente["resultados"]) && 
                                                                      !empty($arrayCliente["resultados"]) ? 
                                                                      $arrayCliente["resultados"]:[],
                                                   "strMensaje"    => $strMensaje)));
        $objResponse->headers->set("Access-Control-Allow-Origin", "*");
        return $objResponse;
    }

    /**
     * @Rest\Post("/apiMovil/getLogin")
     * 
     * Documentación para la función 'getLogin'.
     *
     * Función que permite iniciar sesión a los clientes.
     *
     * @author Kevin Baque Puya
     * @version 1.0 28-12-2022
     *
     */
    public function getLogin(Request $objRequest)
    {
        $arrayRequest         = json_decode($objRequest->getContent(),true);
        $arrayData            = isset($arrayRequest["data"]) && !empty($arrayRequest["data"]) ? $arrayRequest["data"]:array();
        $strCorreo            = isset($arrayData["strCorreo"]) && !empty($arrayData["strCorreo"]) ? $arrayData["strCorreo"]:"";
        $strContrasenia       = isset($arrayData["strContrasenia"]) && !empty($arrayData["strContrasenia"]) ? $arrayData["strContrasenia"]:"";
        $strAutenticacionRs   = isset($arrayData["strAutenticacionRs"]) && !empty($arrayData["strAutenticacionRs"]) ? $arrayData["strAutenticacionRs"]:"N";
        $objResponse          = new Response;
        $intStatus            = 200;
        $em                   = $this->getDoctrine()->getManager();
        $strMensaje           = "";
        try
        {
            $arrayParametros = array('CORREO' => $strCorreo);
            if($strAutenticacionRs == 'N')
            {
                $arrayParametros['CONTRASENIA'] = md5($strContrasenia);
            }
            $objCliente   = $this->getDoctrine()
                                 ->getRepository(InfoCliente::class)
                                 ->findOneBy($arrayParametros);
            if(empty($objCliente))
            {
                $strStatus  = 204;
                throw new \Exception('Usuario y/o contraseña incorrectos.');
            }
            $arrayCliente = $this->getDoctrine()->getRepository(InfoCliente::class)->getCliente($arrayData);
            if(!empty($arrayCliente["error"]))
            {
                throw new \Exception($arrayCliente["error"]);
            }
            if(count($arrayCliente["resultados"])==0)
            {
                throw new \Exception("No existen clientes con los parámetros enviados.");
            }
        }
        catch(\Exception $ex)
        {
            $intStatus = 204;
            $strMensaje = $ex->getMessage();
        }
        $objResponse->setContent(json_encode(array("intStatus"     => $intStatus,
                                                   "arrayCliente"  => isset($arrayCliente["resultados"]) && 
                                                                      !empty($arrayCliente["resultados"]) ? 
                                                                      $arrayCliente["resultados"][0]:[],
                                                   "strMensaje"    => $strMensaje)));
        $objResponse->headers->set("Access-Control-Allow-Origin", "*");
        return $objResponse;
    }

    /**
     * @Rest\Post("/apiWeb/getClienteCriterio")
     * 
     * Documentación para la función 'getClienteCriterioWeb'.
     *
     * Función que permite listar el detalle o totalizado de clientes.
     *
     * @author Kevin Baque Puya
     * @version 1.0 27-02-2023
     *
     */
    public function getClienteCriterioWeb(Request $objRequest)
    {
        $arrayRequest         = json_decode($objRequest->getContent(),true);
        $arrayData            = isset($arrayRequest["data"]) && !empty($arrayRequest["data"]) ? $arrayRequest["data"]:array();
        $strBanderaContador   = isset($arrayData["strBanderaContador"]) && !empty($arrayData["strBanderaContador"]) ? $arrayData["strBanderaContador"]:"NO";
        $strBanderaEdad       = isset($arrayData["strBanderaEdad"]) && !empty($arrayData["strBanderaEdad"]) ? $arrayData["strBanderaEdad"]:"NO";
        $strListarCltCupon    = isset($arrayData["strListarCltCupon"]) && !empty($arrayData["strListarCltCupon"]) ? $arrayData["strListarCltCupon"]:"NO";
        $intIdUsuario         = isset($arrayData["intIdUsuario"]) && !empty($arrayData["intIdUsuario"]) ? $arrayData["intIdUsuario"]:"";
        $intIdEmpresa         = isset($arrayData["intIdEmpresa"]) && !empty($arrayData["intIdEmpresa"]) ? $arrayData["intIdEmpresa"]:"";
        $objResponse          = new Response;
        $intStatus            = 200;
        $em                   = $this->getDoctrine()->getManager();
        $strMensaje           = "";
        try
        {
            if(empty($intIdEmpresa))
            {
                $objUsuario = $this->getDoctrine()
                                   ->getRepository(InfoUsuario::class)
                                   ->find($intIdUsuario);
                if(!empty($objUsuario) && is_object($objUsuario))
                {
                    $objTipoRol = $this->getDoctrine()
                                       ->getRepository(AdmiTipoRol::class)
                                       ->find($objUsuario->getTIPOROLID()->getId());
                    if(!empty($objTipoRol) && is_object($objTipoRol))
                    {
                        $strTipoRol = !empty($objTipoRol->getDESCRIPCIONTIPOROL()) ? $objTipoRol->getDESCRIPCIONTIPOROL():'';
                        if(!empty($strTipoRol) && $strTipoRol=="ADMINISTRADOR")
                        {
                            $intIdEmpresa = '';
                        }
                        else
                        {
                            $objUsuarioEmp = $this->getDoctrine()
                                                  ->getRepository(InfoUsuarioEmpresa::class)
                                                  ->findOneBy(array('USUARIO_ID'=>$intIdUsuario));
                            $intIdEmpresa = $objUsuarioEmp->getEMPRESAID()->getId();
                            if(!empty($intIdEmpresa))
                            {
                                $arrayData["intIdEmpresa"] = $intIdEmpresa;
                            }
                        }
                    }
                }
            }
            if($strBanderaContador=="SI")
            {
                $arrayData = $this->getDoctrine()->getRepository(InfoCliente::class)->getTotalCliente($arrayData);
            }
            elseif($strBanderaEdad=="SI")
            {
                $arrayData = $this->getDoctrine()->getRepository(InfoCliente::class)->getTotalClientePorEdad($arrayData);
            }
            elseif($strListarCltCupon=="SI")
            {
                $arrayData = $this->getDoctrine()->getRepository(InfoCliente::class)->getClientePorCuponCriterio($arrayData);
            }
            if(!empty($arrayData["error"]))
            {
                throw new \Exception($arrayData["error"]);
            }
            if(count($arrayData["resultados"])==0)
            {
                throw new \Exception("No existen clientes con los parámetros enviados.");
            }
        }
        catch(\Exception $ex)
        {
            $intStatus = 204;
            $strMensaje = $ex->getMessage();
        }
        $objResponse->setContent(json_encode(array("intStatus"     => $intStatus,
                                                   "arrayData"     => isset($arrayData["resultados"]) && 
                                                                      !empty($arrayData["resultados"]) ? 
                                                                      $arrayData["resultados"]:[],
                                                   "strMensaje"    => $strMensaje)));
        $objResponse->headers->set("Access-Control-Allow-Origin", "*");
        return $objResponse;
    }
}
