import './GenerarReporte.css';
import { getReportUser } from '@/app/services/Peliculas';
import { useEffect, useState } from 'react';
import jsPDF from 'jspdf';

interface Reporte {
  cantidadUsersActivos: number;
  promedioEdad: string;
  paisPopular: {
    pais: string;
    cantidad: number;
  };
  suscripcionesMes: Array<any>;
  cantidadSuscripciones: {
    cantidadUsuarioFree: string;
    cantidadUsuarioPremium: string;
  };
}

export const GenerarReporte = () => {
  const [reporte, setReporte] = useState<Reporte | null>(null);
  const precioPremium = 4999;

  useEffect(() => {
    const fetchGeneros = async () => {
      try {
        const reportData = await getReportUser();
        setReporte(reportData);
      } catch (error) {
        console.error('Error fetching generos:', error);
      }
    };

    fetchGeneros();
  }, []);

  const generarPDF = () => {
    if (reporte) {
      const doc = new jsPDF();
      
      doc.text('Reporte', 20, 10);
  
      doc.text(`Cantidad de Usuarios Activos: ${reporte.cantidadUsersActivos}`, 20, 20);
      doc.text(`Promedio de Edad: ${Number(reporte.promedioEdad).toFixed(2)}`, 20, 30);
      doc.text(`País más Popular: ${reporte.paisPopular.pais} (${reporte.paisPopular.cantidad} usuarios)`, 20, 40);
  
      doc.text('', 20, 50);
  
      doc.text('Suscripciones por Mes:', 20, 60);
      
      let y = 70;
      reporte.suscripcionesMes.forEach((mes, index) => {
        const posY = y + (index * 10);
        doc.text(`${mes.Anio}: ${mes.CantidadUsuariosRegistrados} suscriptores`, 20, posY);
      });
  
      const posYSuscripciones = y + (reporte.suscripcionesMes.length * 10) + 10;
      doc.text('Cantidad de Suscripciones:', 20, posYSuscripciones);
      doc.text(`Usuarios Free: ${reporte.cantidadSuscripciones.cantidadUsuarioFree}`, 20, posYSuscripciones + 10);
      doc.text(`Usuarios Premium: ${reporte.cantidadSuscripciones.cantidadUsuarioPremium}`, 20, posYSuscripciones + 20);
      doc.text(`Monto remunerado de las suscripciones premium: ${(parseInt(reporte.cantidadSuscripciones.cantidadUsuarioPremium) * precioPremium).toFixed(2)}$`, 20, posYSuscripciones + 30);
      
  
      doc.save('reporte.pdf');
    } else {
      console.log('No hay reporte disponible.');
    }
  };

  return (
    <div className='reporteContainer'>
      {reporte ? (
        <div className='reporteDatos'>
          <p className='reporteTitulo'>Reporte</p>
          <p>Cantidad de Usuarios Activos: {reporte.cantidadUsersActivos}</p>
          <p>Promedio de Edad: {Number(reporte.promedioEdad).toFixed(2)}</p>
          <p>País más Popular: {reporte.paisPopular.pais} ({reporte.paisPopular.cantidad} usuarios)</p>

          <p className='suscripcionesMes'>Suscripciones por Mes(ultimos 12): </p>
          <ul>
            {reporte.suscripcionesMes.map((mes, index) => (
              <li key={index}>Mes {index + 1}: {mes.mes} ({mes.CantidadUsuariosRegistrados} suscripciones)</li>
            ))}
          </ul>
          <p>Cantidad de Suscripciones:</p>
          <p>Usuarios Free: {reporte.cantidadSuscripciones.cantidadUsuarioFree}</p>
          <p>Usuarios Premium: {reporte.cantidadSuscripciones.cantidadUsuarioPremium}</p>
        </div>
      ) : (
        <p>Cargando reporte...</p>
      )}
      <button type='button' className='btn btn-primary buttonReporte' onClick={generarPDF}>Generar PDF</button>
    </div>
  );
}