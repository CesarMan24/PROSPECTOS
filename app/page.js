'use client'
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Target,  Trophy} from "lucide-react";
import Header from  './HEADER.js'
import './estilopage.css';
//import Logo from './IMAGES';
//import Header from 'proyectobd\src\app\HEADER.JS'


export default function Component() {
  return (
  <>
  <Header/>
  {/*<Header/> */}
    <div className="min-h-screen w-full"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1684713510655-e6e31536168d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcG8lMjBmdXRib2x8ZW58MHx8MHx8fDA%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        backgroundAttachment: 'fixed',
        position: 'relative'
      }}
    >
      <div className="max-w-4xl mx-auto space-y-8 ">
        {/* Encabezado de la empresa */}
        <div className="text-center space-y-4">
          
        <img src='' alt="PROspectoslogo2.png"/>         
         <h2 className="LEMA">Prospectos hoy - leyendas mañana</h2>
          <div className="flex justify-center gap-2">
            <Badge variant="secondary">Futuro</Badge>
            <Badge variant="secondary">Compromiso</Badge>
            <Badge variant="secondary">Juventud</Badge>
          </div>
        </div>
        {/* Visión y Misión */}
        <div className="grid gap-6">
          {/* Visión */}
          <Card className="relative overflow-hidden bg-white/50 backdrop-blur-sm ">
            <div className="absolute top-4 right-4">
              <Target className="h-4 w-4 text-primary/20" />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Nuestra Visión</CardTitle>
              <CardDescription>Hacia dónde nos dirigimos</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert">
              <p>
              En PROspectos aspiramos a ser el conducto por el cual los jóvenes pueden alcanzar sus sueños mediante el fútbol, actualmente hay muchas fallas en el proceso en el cual un jugador tiene el compromiso de llegar a ser algo en el futbol a donde es resultado. PROspectos busca simplificar esto ofreciendo datos precisos de jugadores preadolescentes para poder llegar a hacer algo más que solo prospectos. De esta manera, creando un impacto directo en la sociedad y en el deporte en la infancia.

              </p>
             
            </CardContent>
          </Card>

          {/* Misión */}
          <Card className="relative overflow-hidden bg-white/50 backdrop-blur-sm">
            <div className="absolute top-4 right-4">
              <Building2 className="h-6 w-6 text-primary/20" />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Nuestra Misión</CardTitle>
              <CardDescription>Lo que hacemos día a día</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
              La misión de PROspectos es promover el deporte en un lugar en específico mediante la creación de competencias entre equipos. También se busca localizar talento joven en distintas ciudades de tal manera darle más oportunidades a jóvenes de mostrar su talento y llegar a un acuerdo con un equipo profesional en el futuro.
              </p>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Trophy className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Ojeo en prospectos</h3>
                    <p className="text-sm text-muted-foreground">
                      Priorizamos mantener contacto con aquellos jugadores destacados
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    <div className = 'abajo'>.</div>
    </>
  )
}