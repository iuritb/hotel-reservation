// HotelList.spec.ts
import { shallowMount } from "@vue/test-utils";
import HotelList from "@/components/HotelList.vue";

describe("HotelList.vue", () => {
  // Teste 1: Verificar se o componente é renderizado corretamente
  it("renderiza o componente corretamente", () => {
    const wrapper = shallowMount(HotelList);
    expect(wrapper.exists()).toBe(true);
  });

  // Teste 2: Verificar se a lista de hotéis é renderizada corretamente
  it("renderiza a lista de hotéis", () => {
    const hotels = [
      { id: 1, name: "Hotel 1" },
      { id: 2, name: "Hotel 2" },
    ];
    const wrapper = shallowMount(HotelList, {
      propsData: { hotels },
    });
    expect(wrapper.findAll(".hotel-item").length).toBe(hotels.length);
  });

  // Teste 3: Verificar se a mensagem "Nenhum hotel encontrado" é exibida quando a lista de hotéis está vazia
  it('exibe a mensagem "Nenhum hotel encontrado" quando a lista de hotéis está vazia', () => {
    const wrapper = shallowMount(HotelList, {
      propsData: { hotels: [] },
    });
    expect(wrapper.text()).toContain("Nenhum hotel encontrado");
  });

  // Teste 4: Verificar se o evento "reserve" é emitido quando o botão "Reservar" é clicado
  it('emite o evento "reserve" quando o botão "Reservar" é clicado', async () => {
    const hotel = { id: 1, name: "Hotel 1" };
    const wrapper = shallowMount(HotelList, {
      propsData: { hotels: [hotel] },
    });
    await wrapper.find(".reserve-button").trigger("click");
    expect(wrapper.emitted().reserve).toBeTruthy();
  });

  // Teste 5: Verificar se o hotel correto é passado com o evento "reserve"
  it('passa o hotel correto com o evento "reserve"', async () => {
    const hotel = { id: 1, name: "Hotel 1" };
    const wrapper = shallowMount(HotelList, {
      propsData: { hotels: [hotel] },
    });
    await wrapper.find(".reserve-button").trigger("click");
    expect(wrapper.emitted().reserve[0]).toEqual([hotel]);
  });
});
