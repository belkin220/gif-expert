import { fireEvent, render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe('Pruebas en GifItem', () => {

  const title = "Superman";
  const url = "https://marvel.com/superman";
  const error = "Hay props que son requeridas";

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(
    <GifItem title = { title }
             url =  {url } />)
    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar la imagen con el Url y ALT indicados ', () => {
    render(
      <GifItem title = { title }
               url =  { url } />);
      // expect(screen.getByRole('img').src).toBe( url )
      // expect(screen.getByRole('img').alt).toBe( title )

      // Alternativa a lo anterior
      const {src, alt } = screen.getByRole('img');
      expect(src).toBe(url);
      expect(alt).toBe(title);

  });

  test('Debe mostrar el t´tulo en el componente ', () => {
    render(
      <GifItem title = { title }
               url =  { url } />);
               screen.debug()
      expect(screen.getByText(title)).toBeTruthy();

  });
  



})
